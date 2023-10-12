/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import styled from "styled-components";
import { Icon } from '@iconify/react';

const Information = () => {
  return (
    <div className="pb-[24vw]">
      <div className="w-[100vw] h-[74vw] relative z-0">
        <div className="w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0">
          <Icon icon="solar:arrow-left-linear" color="white" className="text-[7vw]" />
          <Icon icon="mingcute:more-2-line" color="white" className="text-[7vw]" />
        </div>
        <img src="" alt="" className="w-[100vw] h-[74vw] bg-slate-300" />
      </div>
      <div className="bg-[#f1f1f1] px-[4vw] pb-[10vw]">
        <div className=" relative mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw] pt-[11vw] pb-[3.8vw] text-center">
          <img
            src=""
            alt=""
            className=" bg-red-200 w-[18vw] h-[18vw] rounded-[50%] absolute top-[-9vw] left-[50%] translate-x-[-50%]"
          />
          <p className="text-[5vw] text-[#253346] font-[800]">YEEEEEEEEE</p>
          <div className="wt-[3vw] text-[3vw] text-[#9396A2] mt-[2vw]">
            <span className="px-[2vw]">
              <span className="pr-[1vw]">6</span>关注
            </span>
            <span className="px-[2vw]">
              <span className="pr-[1vw]">3</span>粉丝
            </span>
            <span className="px-[2vw]">
              <span>Lv.</span>7
            </span>
          </div>
          <div className="h-[11vw] flex items-center justify-center">
            <div className="bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]">
              IP:
            </div>
            <div className="bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw] flex items-center">
              <Icon icon="iconoir:male" color="#5c9bed" className="text-[3vw] mr-[1vw]" /> 00后
              处女座
            </div>
            <div className="bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[1px] border-[#CCCCCD] rounded-[8px] ml-[1.5vw]">
              村龄 4年
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="px-[3vw] py-[1vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]">
              编辑资料
            </div>
            <div className="w-[7.7vw] h-[7.7vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[1px] border-[#CCCCCD] rounded-[200px] ml-[1.5vw]">
              <Icon icon="ep:arrow-down-bold" color="#41495e" />
            </div>
          </div>
        </div>

        <div>
          <div className="w-[80vw] h-[15vw] flex items-center justify-evenly font-bold mx-auto relative">
            <div className="text-[#2a3146] text-[3.3vw]">主页</div>
            <div className="text-[#9095a1] text-[3.3vw]">动态</div>
            <div className="text-[#9095a1] text-[3.3vw]">博客</div>
            <div className="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]"></div>
          </div>
          <div className="w-[92vw] h-[43vw] rounded-[15px] bg-[#fff] mb-[3.7vw]">
            <div className="text-[4vw] pl-[4vw] leading-[12vw]">音乐品味</div>
            <div className="flex justify-evenly">
              <div className="w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#ffdfd3] to-[#FEFEFB] border-[1px] border-[#F6F4F0] relative"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
