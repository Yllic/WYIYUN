/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { ConfigProvider, Slider } from 'antd';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SongDatailIds, SongUrlV } from '../service';

const PlayerHome = () => {
  const [song, setSong] = useState();
  const [player, setPlayer] = useState();
  const location = useLocation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioClick = () => {
    const audio = audioRef.current;
    if (audio && audio instanceof HTMLAudioElement) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    setIsPlaying(!isPlaying);
  };
  // useEffect(() => {
  //   console.log(isPlaying);
  // }, [isPlaying]);

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
    .haft {
      transition: transform 0.5s ease-in-out;
    }
  `;
  useEffect(() => {
    SongDatailIds(location.pathname.split('/')[2])
      .then((res) => {
        setSong(res.data.songs[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    SongUrlV(location.pathname.split('/')[2])
      .then((res) => {
        setPlayer(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(player);
  // console.log(song);
  return (
    <div className="w-[100vw] h-[100vh] relative">
      <div className="w-[100vw] h-[100vh] absolute z-[3] flex flex-col items-center justify-between">
        {/* 上 */}
        <div className="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between box-border">
          <Icon
            icon="ep:arrow-down-bold"
            color="white"
            className="text-[6vw] mt-[0.6vw]"
            onClick={() => window.history.back()}
          />
          <div className="text-center">
            <p className="h-[5vw] text-[4vw] text-[#fff] line-clamp-1 mb-0">{song?.al.name}</p>
            <p className="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">
              {song?.ar[0].name}
              <span className="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]">
                关注
              </span>
            </p>
          </div>
          <Icon icon="clarity:share-line" color="white" className="text-[6vw]" />
        </div>
        {/* 唱片 */}
        <div className="relative w-[100vw] h-[120vw]">
          <div
            className="z-[10] rotated w-[30vw] h-[40vw] absolute top-[16vw] left-[50vw] origin-top-left"
            style={{
              transform: `${isPlaying ? 'rotate(-10deg)' : 'rotate(-45deg)'}`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <img
              src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png"
              alt=""
              className="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"
            />
          </div>
          <div className="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-40%]">
            <div className="absolute w-[80vw] h-[80vw]">
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
                className="w-[80vw] h-[80vw] absolute top-0"
              />
              <img
                src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png"
                alt=""
                className="w-[80vw] h-[80vw] absolute top-0"
              />
            </div>
            <StyledDiv>
              <img
                src={song?.al.picUrl}
                alt=""
                className={
                  isPlaying
                    ? 'animation w-[50vw] h-[50vw] absolute top-[17%] left-[17%] rounded-[50%] border-[2vw] border-solid border-[#000]'
                    : 'w-[50vw] h-[50vw] absolute top-[17%] left-[17%] rounded-[50%] border-[2vw] border-solid border-[#000]'
                }
              />
            </StyledDiv>
          </div>
        </div>
        {/* 下 */}
        <div className="w-[100vw] mb-[10vw]">
          <div className="w-[100vw] mt-[5vw] flex justify-evenly items-center text-[5vw] text-[white]">
            <Icon icon="octicon:heart-24" />
            <Icon icon="streamline:interface-download-circle-arrow-circle-down-download-internet-network-server-upload" />
            <Icon icon="octicon:people-24" height="5vw" />
            <Icon icon="uil:comment-message" height="6vw" />
            <Icon icon="mingcute:more-2-line" height="7vw" />
          </div>
          <div className="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw] box-border">
            <div className="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">00:00</div>
            <ConfigProvider
              theme={{
                components: {
                  Slider: {
                    trackBg: '#fff',
                    trackHoverBg: '#fff',
                    railBg: '#ffffff4e',
                    railHoverBg: '#ffffff4e',
                    railSize: '0.4vw',
                    handleLineWidthHover: '0.2vw',
                    handleLineWidth: '0.4vw',
                    handleSize: '1.4vw',
                    handleSizeHover: '1.4vw',
                    handleColor: '#fff',
                  },
                },
              }}
            >
              <Slider
                defaultValue={0}
                className="w-[70vw] h-[1.4vw]"
                tooltip={{
                  formatter: null,
                }}
              />
            </ConfigProvider>
            {/* <audio src={player.url} loop autoPlay><audio/> controls */}
            <audio autoPlay src={player?.url} ref={audioRef}></audio>
          </div>
          <div className="h-[12.3vw] flex w-[100vw] items-center justify-evenly text-[#fff] text-[5vw]">
            <Icon icon="teenyicons:loop-solid" />
            <Icon icon="fluent:next-20-filled" hFlip={true} />
            <div
              className="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center"
              onClick={() => audioClick()}
            >
              {isPlaying ? (
                <Icon icon="typcn:equals" color="black" height="6vw" rotate={1} />
              ) : (
                <Icon icon="ion:play" color="black" height="6vw" />
              )}
            </div>
            <Icon icon="fluent:next-20-filled" />
            <Icon icon="fontisto:play-list" width="5vw" />
          </div>
        </div>
      </div>
      {/* 蒙版 */}
      <div
        style={{
          backgroundImage: `url(${song?.al.picUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          filter: 'blur(24px)',
        }}
        className="w-[100vw] h-[100vh] absolute top-0 left-0 z-[1]"
      ></div>
      <div
        className="w-[100vw] h-[100vh] fixed top-0 left-0 z-[2]"
        style={{ backgroundColor: 'rgb(0 0 0 / 50%)' }}
      ></div>
    </div>
  );
};

export default PlayerHome;
