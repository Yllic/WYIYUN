/* eslint-disable react/function-component-definition */
import React from 'react';

const SongBoutique = () => {
  return (
    <div className="bg-slate-400">
      <div className=" h-[12vw] flex items-center justify-end text-[#fff] opacity-60 px-[5.8vw] box-border ">
        <div
          className=" px-[1vw] py-[0.6vw] rounded-[1vw] text-[3vw] mr-[32vw] "
          style={{ border: '0.2vw solid #fff' }}
        >
          精品歌单
        </div>
        <div className="text-[6vw]">X</div>
      </div>
      <div className="flex flex-col items-center">
        <img src="" alt="" className="w-[64vw] h-[64vw] rounded-[20px]" />
        <p className="text-[#fff] text-[4.5vw] pb-[3vw]" style={{ borderBottom: '1px solid #fff' }}>
          11111111111111111
        </p>
      </div>
      <div>
        <div>标签:</div>
        <div className="px-[1vw] py-[1vw] bg-[#fff]">华语</div>
        <div>华语</div>
        <div>华语</div>
      </div>
      <h1>精品歌单</h1>
    </div>
  );
};

export default SongBoutique;
