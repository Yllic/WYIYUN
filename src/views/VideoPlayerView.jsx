/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { NoticeBar } from 'antd-mobile';
import { useToggle } from 'ahooks';
import { getMvDetail, getMvInfo, getMvUrl } from '../service';

const VideoPlayerView = () => {
  const [mv, setMv] = useState();
  const [info, setInfo] = useState();
  const [detail, setDetail] = useState();
  const location = useLocation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [state, { toggle }] = useToggle(false);
  const videoClick = () => {
    const video = videoRef.current;
    if (video && video instanceof HTMLVideoElement) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
    setIsPlaying(!isPlaying);
  };
  // 视频
  useEffect(() => {
    getMvUrl(location.pathname.split('/')[2])
      .then((res) => {
        setMv(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(mv);

  // 右边点赞数等信息
  useEffect(() => {
    getMvInfo(location.pathname.split('/')[2])
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(info);

  // 下边
  useEffect(() => {
    getMvDetail(location.pathname.split('/')[2])
      .then((res) => {
        setDetail(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(detail);

  const icons = [
    { icon: 'bxs:like', count: info?.likedCount },
    { icon: 'heroicons:chat-bubble-oval-left-ellipsis-20-solid', count: info?.commentCount },
    { icon: 'majesticons:share', count: info?.shareCount },
    { icon: 'fluent:collections-24-filled', count: '收藏' },
  ];
  // const demoLongText = lorem.generateWords(20);
  const StyledDiv = styled.div`
    // 旋转
    @keyframes rotate {
      from {
        transform: translateX(0%) translateY(0%) rotate(0deg);
      }
      to {
        transform: translateX(0%) translateY(0%) rotate(360deg);
      }
    }
    .animation {
      animation: rotate 10s linear infinite;
    }
  `;
  return (
    <div className=" relative z-[6] h-[100vh] box-border bg-black">
      <div className="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw] box-border text-[#fefefe] mb-[9.6vw]">
        <Icon icon="ep:arrow-left-bold" width="6vw" onClick={() => window.history.back()} />
        <div className="flex items-center">
          <Icon
            icon="fluent:picture-in-picture-enter-20-regular"
            width="6vw"
            className="mr-[7vw]"
          />
          <Icon icon="ri:more-2-fill" width="6vw" />
        </div>
      </div>
      {/* 视频   onClick={() => videoClick()} */}
      <div className="w-[100%] h-[54vw] relative" onTouchStart={() => videoClick()}>
        {/*  controls */}
        <video autoPlay width="100%" height="100%" src={mv?.url} ref={videoRef}>
          <track kind="captions" />
        </video>
        <Icon
          icon="solar:play-bold"
          className=" absolute text-[14vw] z-[8] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[rgba(255,255,255,0.4)]"
          style={{ display: `${isPlaying ? 'block' : 'none'}` }}
        />
      </div>
      {/*  */}
      <div className="w-[100%] h-[80vw] relative bg-black">
        <div className="h-[80vw] px-[4vw] pb-[3vw]">
          {/* 左下 */}
          <div className=" absolute bottom-[0]">
            {/* 歌手 */}
            <div className="w-[76vw] flex items-center mb-[3vw]">
              <img
                src={detail?.artists[0].img1v1Url}
                alt=""
                className="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-solid border-[#ffffff]"
              />
              <span className="mx-[2vw] text-[#ffffff] text-[4vw]">{detail?.artistName}</span>
              <div className="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]">
                <span className="text-[#fff] text-[6vw] font-bold">+</span>
              </div>
            </div>
            {/* mv */}
            <div className="w-[66vw] mb-[1vw] text-[#fff] flex items-center justify-between">
              <div>
                <div className="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]">
                  MV
                </div>
                <span>{detail?.name}</span>
              </div>
              <Icon
                icon="ep:arrow-down"
                width="5vw"
                onClick={() => toggle()}
                style={{
                  transform: `${
                    state
                      ? 'translateX(0%) translateY(0%) rotate(180deg)'
                      : 'translateX(0%) translateY(0%) rotate(0deg)'
                  }`,
                }}
              />
            </div>
            {/* desc简介显示与隐藏 */}
            <div
              className=" max-h-[93vw] text-[#fff] w-[67vw] overflow-auto"
              style={{
                display: `${state ? 'block' : 'none'}`,
                transition: 'height 0.3s ease-in-out',
              }}
            >
              {detail?.desc}
            </div>
            {/* 滚动 */}
            <div className="text-[#fff] text-[4vw] flex items-center">
              <Icon icon="clarity:music-note-solid" />
              <div className="w-[34vw]">
                <NoticeBar
                  content={detail?.name}
                  color="alert"
                  className=" w-auto bg-black border-transparent text-[#fff]"
                  icon
                />
              </div>

              {/* <div className="px-[4vw] w-[25vw]">{detail?.name}</div> */}
              <Icon icon="ph:heart" />
            </div>
          </div>
          {/* 右边 */}
          <div className=" w-[10vw] right-[4vw] absolute bottom-0">
            {icons.map((item) => (
              <div className="flex flex-col items-center justify-center mb-[4vw] text-[6vw] text-[#eaeaea]">
                <Icon icon={item.icon} />
                <div className="text-[#eaeaea] text-[3vw] mt-[2vw]">{item.count}</div>
              </div>
            ))}
            <StyledDiv>
              <div className="relative flex items-center justify-center">
                <img
                  src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                  alt=""
                  className="w-[10vw] h-[10vw] rounded-[50%]"
                />
                <img
                  src={detail?.cover}
                  alt=""
                  className="animation w-[7vw] h-[7vw] rounded-[50%] absolute"
                />
              </div>
            </StyledDiv>
          </div>
        </div>
      </div>
      <div className="w-[100%] absolute bottom-0 bg-black flex items-center justify-between text-[#4d4d4d] px-[5vw] py-[5vw] box-border text-[4vw]">
        <div>发条评论结识有趣的人</div>
        <Icon
          icon="bx:bx-expand-horizontal"
          width="5vw"
          style={{ transform: 'translateX(0%) translateY(0%) rotate(45deg)' }}
        />
      </div>
    </div>
  );
};

export default VideoPlayerView;
