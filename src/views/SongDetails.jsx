/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prefer-template */
/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToggle } from 'ahooks';
import BetterScroll from '../components/BetterScroll';
import { getPlaylistDetailById, musicSlider } from '../service';
import Popups from './comm/Popups';

const SongDetails = () => {
  const [playId, setPlayId] = useState();
  const [slider, setSlider] = useState();
  const [state, { toggle }] = useToggle(false);
  const navigate = useNavigate();
  // 跳转至首页
  const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  // 歌单详情页
  useEffect(() => {
    getPlaylistDetailById(location.pathname.split('/')[2])
      .then((res) => {
        setPlayId(res.data.playlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    musicSlider(location.pathname.split('/')[2])
      .then((res) => {
        setSlider(res.data.playlists);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(slider);
  // console.log(playId);
  // console.log(state);

  return (
    <div>
      {/* h-[70vw] pb-[18vw] coverImgUrl   bg-gradient-to-br from-[#486D8D] to-[#6186AB]     */}
      <div className="transition-all duration-20 0 relative pb-[5vw] pl-[3.9vw] pr-[3.4vw] box-content ">
        <div
          className=" w-[96%] h-[100%] absolute top-0 z-[-1] box-border"
          style={{
            backgroundImage: `url(${playId?.coverImgUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            filter: 'blur(50px)',
          }}
        ></div>
        {/* 歌单 */}
        <div className="h-[13.5vw] w-[100vw] pl-[3.9vw] pr-[3.4vw] flex items-center justify-between fixed top-0 left-0 box-border">
          <div className="flex items-center">
            <Icon
              icon="solar:arrow-left-linear"
              color="white"
              className="text-[7vw]"
              onClick={() => navigate('/Home')}
            />
            <div className="text-[4.2vw] text-[#fff] ml-[4.7vw] relative">歌单</div>
          </div>
          <div className="flex items-center">
            <Icon icon="ooui:search" color="white" className="text-[4.6vw] mr-[5vw]" />
            <Popups></Popups>
          </div>
        </div>
        <div className="pt-[13.5vw] pb-[1vw]">
          {/* 单个歌曲详情 */}
          <div style={{ display: `${state ? 'none' : 'block'}` }}>
            <div className=" flex pt-[2.6vw] justify-between ">
              {/* 左边图片 */}
              <div className="w-[24vw] h-[25vw] pt-[1vw] relative">
                <img
                  src={playId?.coverImgUrl}
                  alt=""
                  className="w-[24vw] h-[24vw] rounded-[10px] relative z-[2] bg-slate-300"
                  onTouchEnd={() => navigate(`/SongBoutique/${location.pathname.split('/')[2]}`)}
                />
                <div className="w-[20vw] h-[10vw] bg-opacity-20 bg-[#fff] absolute top-0 left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                <div className="absolute top-0 left-0 pr-[1.4vw] pt-[2vw] justify-end font-[800] text-[#fff] flex items-center w-[24vw] z-[2]">
                  <Icon icon="ion:play" width="3vw" height="3vw" />
                  <span className="font-[800] text-[2.5vw] mr-[2vw]">
                    {parseInt(playId?.playCount / 100000000) > 1
                      ? parseInt(playId?.playCount / 100000000) + '亿'
                      : parseInt(playId?.playCount / 10000) > 1
                      ? parseInt(playId?.playCount / 10000) + '万'
                      : parseInt(playId?.playCount)}
                  </span>
                </div>
              </div>
              {/* 右边介绍 */}
              <div className="w-[67vw] pr-[12vw] ml-[1vw]">
                <p className="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800] m-0">
                  {playId?.name}
                </p>
                <div className="h-[10.5vw] flex items-center">
                  <img
                    src={playId?.creator.avatarUrl}
                    alt=""
                    className="w-[6vw] h-[6vw] rounded-[50%]"
                  />
                  <span className=" overflow-hidden text-ellipsis text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">
                    {playId?.creator.nickname}
                  </span>
                  <span className="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                    <Icon icon="heroicons:plus" className="text-[4vw]" />
                    关注
                  </span>
                </div>
                <div className="flex mt-[1vw] w-[56vw]">
                  {playId?.tags.map((item, index) => (
                    <div
                      className="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[1vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]"
                      key={index}
                    >
                      <span className="text-[2.2vw]">{item}</span>
                      <Icon icon="uiw:right" color="white" className="text-[3vw] ml-[0.6vw]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[1.8vw] justify-between">
              <span
                className="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden"
                onTouchEnd={() => navigate(`/SongBoutique/${location.pathname.split('/')[2]}`)}
              >
                {playId?.description}
              </span>
              <Icon icon="icon-park-outline:right" color="white" className="text-[4vw]" />
            </p>
          </div>
          {/* 点击图标显示的内容     state      hidden   */}
          <div style={{ display: `${state ? 'block' : 'none'}` }}>
            <div className="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">
              喜欢这个歌单的用户也听了
            </div>
            <BetterScroll
              wrapperStyle={{
                height: 'auto',
                width: '95vw',
              }}
              contentStyle={{
                display: 'flex',
                width: '34vw',
              }}
              config={{
                scrollX: true,
                scrollY: false,
              }}
            >
              {slider?.map((item, index) => (
                <div className="w-[28vw] h-[48vw] mr-[2.5vw]" key={index}>
                  <div className="w-[28vw] h-[28vw] rounded-[8px] overflow-hidden relative pt-[1vw]">
                    <img
                      src={item.coverImgUrl}
                      alt=""
                      className="w-[28vw] h-[28vw] rounded-[8px] relative z-[1]"
                    />
                    <div className="w-[26vw] h-[28vw] bg-opacity-20 bg-[#fff] absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[0]"></div>
                  </div>
                  <p className="text-[2.78vw] text-[#fff] mt-[2vw]">{item.name}</p>
                </div>
              ))}
            </BetterScroll>
          </div>
          {/* 需要切换图标 !!!!!! */}
          <div className="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center">
            <Icon
              icon="iconamoon:arrow-down-2-light"
              color="white"
              className="text-[6vw] mt-[0.5vw]"
              onClick={() => toggle()}
            />
          </div>

          {/* 三个按钮 */}
          <div className="flex items-center">
            <div className="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
              <Icon icon="bxs:share" color="white" hFlip={true} className="text-[5vw] mr-[1.8vw]" />
              {playId?.shareCount}
            </div>
            {/* 歌单评论点击跳转  */}
            <div
              className="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw] mx-[3vw]"
              onTouchEnd={() => navigate(`/SongComment/${location.pathname.split('/')[2]}`)}
            >
              <Icon
                icon="ph:chat-circle-dots-fill"
                color="white"
                className="text-[5vw] mr-[1.8vw]"
              />
              {playId?.commentCount}
            </div>
            <div className="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]">
              <Icon
                icon="fluent:star-add-24-filled"
                color="white"
                className="text-[5vw] mr-[1.8vw]"
              />
              {playId?.subscribedCount}
            </div>
          </div>
        </div>
      </div>

      {/* 播放全部 */}
      <div className="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[-2.5vw] px-[3.8vw] box-border">
        <div className="h-[13vw] flex items-center justify-between">
          <div className="flex items-center">
            <Icon icon="icon-park-solid:play" color="#ed3e20" className=" text-[7vw]" />
            <span className="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">播放全部</span>
            <span className="text-[#8C9094] text-[2.7vw]">({playId?.trackCount})</span>
          </div>
          <div className="flex items-center">
            <Icon icon="clarity:download-line" color="#2c3034" className="text-[5vw]" />
            <Icon
              icon="solar:list-check-bold"
              color="#2c3034"
              className="text-[6vw] ml-[5vw] mt-[1vw]"
            />
          </div>
        </div>
        {/* 歌曲 */}
        <div>
          {playId?.tracks.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              className="flex items-center h-[14vw]"
              key={index}
              onClick={() => navigate(`/PlayerHome/${item.id}`)}
            >
              <div className="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">
                {index + 1}
              </div>
              <div className="font-[500] text-[3.6vw] w-[64vw]">
                <div className="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
                  <span className="text-ellipsis text-[#000]">{item.name}&nbsp;</span>
                  <span className="text-[#949797]">{item.alia ? [item.alia] : item.alia}</span>
                </div>
                <div className="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center mt-[1vw]">
                  <span>
                    {item.ar[0].name}-{item.al.name}
                  </span>
                </div>
              </div>
              <Icon
                icon="arcticons:fpt-play"
                color="#b3b3b3"
                className="ml-[4.6vw] text-[6vw] mt-[-2vw]"
              />
              <Icon
                icon="mingcute:more-2-line"
                color="#b3b3b3"
                className="text-[5vw] ml-[4.6vw] mt-[-2vw]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SongDetails;
