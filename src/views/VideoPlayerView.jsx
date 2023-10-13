/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { getMvUrl } from '../service';

const VideoPlayerView = () => {
  const [mv, setMv] = useState();
  const location = useLocation();
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
  return (
    <div className=" relative z-[6] h-[100vh] box-border bg-black">
      <div className="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw] box-border text-[#fefefe] mb-[9.6vw]">
        <Icon icon="ep:arrow-left-bold" width="6vw" />
        <div className="flex items-center">
          <Icon
            icon="fluent:picture-in-picture-enter-20-regular"
            width="6vw"
            className="mr-[7vw]"
          />
          <Icon icon="ri:more-2-fill" width="6vw" />
        </div>
      </div>
      {/* 视频 */}
      <div className="w-[100%] h-[54vw] relative">
        {/* controls  */}
        <video controls loop width="100%" height="100%" src={mv?.url}>
          {/* <source type="video/mp4" /> */}
          <track kind="captions" />
        </video>
        <Icon
          icon="solar:play-bold"
          className=" absolute text-[14vw] z-[8] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[rgba(255,255,255,0.4)]"
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
                src=""
                alt=""
                className="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-solid border-[#ffffff]"
              />
              <span className="mx-[2vw] text-[#ffffff] text-[4vw]">周震南</span>
              <div className="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]">
                <span className="text-[#fff] text-[6vw] font-bold">+</span>
              </div>
            </div>
            {/* mv */}
            <div className="w-[76vw] mb-[5vw] text-[#fff] flex items-center justify-between">
              <div>
                <div className="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]">
                  MV
                </div>
                <span>F.F.F</span>
              </div>
              <Icon icon="ep:arrow-down" width="5vw" />
            </div>
            <div className="text-[#fff] text-[4vw] flex">
              <Icon icon="clarity:music-note-solid" />
              <div className="px-[4vw] w-[25vw]">FFFF</div>
              <Icon icon="ph:heart" />
            </div>
          </div>
          {/* 右边 */}
          <div className=" w-[10vw] right-[4vw] absolute bottom-0">
            <div className="flex items-center flex-wrap justify-center mb-[4vw] text-[6vw] text-[#eaeaea]">
              <Icon icon="bxs:like" />
              <div className="text-[#eaeaea] text-[3vw] mt-[2vw]">223334</div>
            </div>
            <div className="flex items-center flex-wrap justify-center mb-[4vw] text-[6vw] text-[#eaeaea]">
              <Icon icon="heroicons:chat-bubble-oval-left-ellipsis-20-solid" />
              <div className="text-[#eaeaea] text-[3vw] mt-[2vw]">223334</div>
            </div>
            <div className="flex items-center flex-wrap justify-center mb-[4vw] text-[6vw] text-[#eaeaea]">
              <Icon icon="majesticons:share" />
              <div className="text-[#eaeaea] text-[3vw] mt-[2vw]">223334</div>
            </div>
            <div className="flex items-center flex-wrap justify-center mb-[4vw] text-[6vw] text-[#eaeaea]">
              <Icon icon="fluent:collections-24-filled" />
              <div className="text-[#eaeaea] text-[3vw] mt-[2vw]">收藏</div>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
                className="w-[10vw] h-[10vw] rounded-[50%]"
              />
              <img
                src="http://p1.music.126.net/HiBLm08cBjFRLpratqHNdQ==/109951168883709890.jpg"
                alt=""
                className="w-[7vw] h-[7vw] rounded-[50%] absolute"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] absolute bottom-0 bg-black flex items-center justify-between text-[#4d4d4d] px-[5vw] py-[5vw] box-border text-[4vw]">
        <div>发条评论结识有趣的人</div>
        <h4 className="m-[0]">123</h4>
      </div>
    </div>
  );
};

export default VideoPlayerView;
