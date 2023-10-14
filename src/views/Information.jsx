/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';
// 底部导航栏
import NavBar from './NavBar';

const Information = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-[24vw]">
      <div className="w-[100vw] h-[74vw] relative z-0">
        <div className="w-[100vw] h-[15vw] px-[4.5vw] flex items-center justify-between fixed top-0 box-border">
          <Icon
            icon="solar:arrow-left-linear"
            color="white"
            className="text-[7vw]"
            onClick={() => navigate('/Home')}
          />
          <Icon icon="mingcute:more-2-line" color="white" className="text-[7vw]" />
        </div>
        <img src="" alt="" className="w-[100vw] h-[74vw] bg-slate-300" />
      </div>
      <div className="bg-[#f1f1f1] px-[4vw] pb-[10vw]">
        {/* 个人信息 */}
        <div className=" relative mt-[-4vw] rounded-[15px] bg-[#f1f1f1] w-[92vw] pt-[11vw] pb-[3.8vw] text-center">
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
            <div className="bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[0.3vw] border-solid border-[#CCCCCD] rounded-[8px] ml-[1.5vw]">
              IP:
            </div>
            <div className="bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[0.3vw] border-solid border-[#CCCCCD] rounded-[8px] ml-[1.5vw] flex items-center">
              <Icon icon="iconoir:male" color="#5c9bed" className="text-[3vw] mr-[1vw]" /> 00后
              处女座
            </div>
            <div className="bg-[#fff] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] text-[#41495E] text-[2vw]  border-[0.3vw] border-solid border-[#CCCCCD] rounded-[8px] ml-[1.5vw]">
              村龄 4年
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="px-[3vw] py-[1vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[0.3vw] border-solid border-[#CCCCCD] rounded-[200px] ml-[1.5vw]">
              编辑资料
            </div>
            <div className="w-[7vw] h-[7vw] text-[#41495E] text-[2.9vw] font-[800] flex items-center justify-center border-[0.3vw] border-solid border-[#CCCCCD] rounded-[200px] ml-[1.5vw]">
              <Icon icon="ep:arrow-down-bold" color="#41495e" />
            </div>
          </div>
        </div>

        {/* 主页动态博客 */}
        <div>
          <div className="w-[80vw] h-[15vw] flex items-center justify-evenly font-bold mx-auto relative">
            <div className="text-[#2a3146] text-[3.3vw]">主页</div>
            <div className="text-[#9095a1] text-[3.3vw]">动态</div>
            <div className="text-[#9095a1] text-[3.3vw]">博客</div>
            <div className="absolute bg-[#eb474e] w-[3.3vw] h-[1vw] rounded-[20vw] bottom-[2vw] left-[16.4vw]"></div>
          </div>
          {/* 音乐品味 */}
          <div className="w-[92vw] h-[43vw] rounded-[15px] bg-[#fff] mb-[3.7vw]">
            <div className="text-[4vw] pl-[4vw] leading-[12vw]">音乐品味</div>
            <div className="flex justify-evenly">
              <div className="w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#ffdfd3] to-[#FEFEFB] border-[0.3vw] border-solid border-[#F6F4F0] relative">
                <div className="text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">
                  我的喜欢
                </div>
                <p className="text-[3.5vw] text-[#5A565D] m-0 pl-[1.7vw]">142首</p>
                <div className="absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center">
                  <Icon
                    icon="heroicons:heart-20-solid"
                    color="#b1b1ae"
                    className="mr-[0.8vw] text-[3vw]"
                  />
                  喜欢的音乐
                </div>
              </div>
              <div className="w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#f9ebcf] to-[#FEFEFB] border-[0.3vw] border-solid border-[#F6F4F0] relative">
                <div className="text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">
                  累计听歌
                </div>
                <p className="text-[3.5vw] text-[#5A565D] m-0 pl-[1.7vw]">142首</p>
                <div className="absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center">
                  <Icon
                    icon="heroicons:heart-20-solid"
                    color="#b1b1ae"
                    className="mr-[0.8vw] text-[3vw]"
                  />
                  喜欢的音乐
                </div>
              </div>
              <div className="w-[27vw] h-[28vw] rounded-[15px] bg-gradient-to-b from-[#dbeff9] to-[#FEFEFB] border-[0.3vw] border-solid border-[#F6F4F0] relative">
                <div className="text-[2.6vw] text-[#837C87] h-[7.4vw] leading-[7.4vw] pl-[1.7vw]">
                  本周关键词
                </div>
                <p className="text-[3.5vw] text-[#5A565D] m-0 pl-[1.7vw]">属于你的音乐档案</p>
                <div className="absolute bottom-[2.5vw] left-[1.7vw] text-[#B1B1AE] text-[2.4vw] flex items-center">
                  <Icon
                    icon="ph:hourglass-fill"
                    color="#b1b1ae"
                    className="mr-[0.8vw] text-[3vw]"
                  />
                  喜欢的音乐
                </div>
              </div>
            </div>
          </div>
          {/* 创建的歌单 */}
          <div className="w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] pb-[3.7vw] mb-[3.7vw]">
            <p className="text-[#2a3146] font-[600] text-[4vw] mt-0 mb-[4.4vw] mx-[4vw]">
              创建的歌单
              <span className="text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">(0个)</span>
            </p>
          </div>
          {/* 收藏的歌单 */}
          <div className="w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] pb-[3.7vw] mb-[3.7vw]">
            <p className="text-[#2a3146] font-[600] text-[4vw] mt-0 mb-[4.4vw] mx-[4vw]">
              收藏的歌单
              <span className="text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]">(1个)</span>
            </p>
            <ul className="px-[4vw]">
              <li className="h-[12vw] flex mb-[1.5vw]">
                {/* 左边图片 */}
                <div className="relative pt-[0.6vw] mr-[2.6vw] ">
                  <img
                    src=""
                    alt=""
                    className="w-[12vw] h-[12vw] rounded-[10px] bg-slate-300 z-[2] relative"
                  />
                  <div className="w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"></div>
                </div>
                {/* 右边文字 */}
                <div className="flex flex-wrap items-center flex-1 py-[1vw]">
                  <p className="w-[100%] text-[3.8vw] text-[#3f4659] m-0">111111111</p>
                  <p className="w-[100%] text-[2.8vw] text-[#aaadb5] m-0">22222222</p>
                </div>
              </li>
            </ul>
          </div>
          {/* 基本信息 */}
          <div className="w-[100%] bg-[#fff] rounded-[15px]">
            <div className="h-[15vw] flex items-center justify-between mx-[3.8vw]">
              <div className="text-[#2a3146] text-[4vw]">基本信息</div>
              <div
                className="text-[2.6vw] rounded-[200px] px-[2.7vw] py-[1.5vw] text-[#333]"
                style={{ border: '0.3vw solid #E7E7E7' }}
              >
                领取村民证
              </div>
            </div>
            <div className="h-[25vw] text-[3vw] text-[#666] flex flex-wrap mx-[3.8vw]">
              <div className="w-[100%]">村龄: 4年(2019年5月注册)</div>
              <div className="w-[100%]">性别: 女</div>
              <div className="w-[100%]">年龄: 00后 处女座</div>
            </div>
            <div
              className="text-[3vw] text-[#999] flex items-center justify-center h-[9vw]"
              style={{ borderTop: '0.3vw solid #EAEAEA' }}
            >
              查看全部
              <Icon icon="uiw:right" color="#999" className="text-[3vw] ml-[0.6vw]" />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Information;
