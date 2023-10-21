/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';
import { Mask } from 'antd-mobile';
import { getPlaylistDetailById } from '../service';

const SongBoutique = () => {
  const [playId, setPlayId] = useState();
  const location = useLocation();
  useEffect(() => {
    getPlaylistDetailById(location.pathname.split('/')[2])
      .then((res) => {
        setPlayId(res.data.playlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(playId);
  return (
    <div className=" w-[100vw] h-[100vh] relative">
      <div
        className=" w-[100%] h-[99vh] absolute top-0 left-0 right-0 z-[-2]  "
        style={{
          backgroundImage: `url(${playId?.coverImgUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          filter: 'blur(60px)',
        }}
      />
      <Mask className="z-[-1]" opacity="0.4" />
      <div className=" h-[12vw] flex items-center justify-evenly text-[#fff] px-[5.8vw] box-border ">
        <div
          className=" px-[1vw] py-[0.6vw] rounded-[1vw] text-[3vw]"
          style={{ border: '0.2vw solid #ffffff93' }}
        >
          精品歌单
        </div>
      </div>
      <Icon
        icon="fluent-mdl2:status-circle-error-x"
        className="text-[8vw] text-[#fff] absolute right-0 top-[1vw]"
        onClick={() => window.history.back()}
      />
      <div className="flex flex-col items-center mt-[6vw] px-[5vw]">
        <img src={playId?.coverImgUrl} alt="" className="w-[60vw] h-[60vw] rounded-[20px]" />
        <p className="text-[#fff] text-[5.3vw] my-[7vw]">{playId?.name}</p>
        <div
          className="w-[60vw] h-[0.2vw] mb-[6vw] rounded-[10px]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,0,0,0), #ffffff2f,rgba(255,0,0,0))' }}
        />
      </div>
      <div className="flex items-center text-[#fff] px-[5vw] box-border text-[3.2vw]">
        <div>标签:</div>
        {playId?.tags.map((item) => (
          <div className="px-[2vw] py-[1vw] bg-[#ffffff42] rounded-[10vw] ml-[2vw]" key={item.id}>
            {item}
          </div>
        ))}
      </div>
      <div className=" px-[5vw] box-border text-[#fff] mt-[4vw] text-[3.2vw]">
        <div className="mb-[6vw] max-h-[38vw] overflow-auto">{playId?.description}</div>
      </div>
      <div className=" absolute bottom-[6vw]">
        <div className=" w-[100vw] flex items-center justify-evenly text-[#fff]">
          <div
            className=" px-[3.2vw] py-[1.6vw] rounded-[5vw] text-[3.4vw]"
            style={{ border: '0.2vw solid #ffffff93' }}
          >
            保存封面
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongBoutique;
