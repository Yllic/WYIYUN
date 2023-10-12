/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import BetterScroll from './BetterScroll';
import { Icon } from '@iconify/react';

const SongHot = (props) => {
  // console.log(props.dataHot);
  const HotBgColor = ['#9C9C9C', '#8685aa', '#ae734e'];
  return (
    <BetterScroll
      wrapperStyle={{
        height: 'auto',
      }}
      contentStyle={{
        display: 'flex',
        width: '1280px',
      }}
      config={{
        scrollX: true,
        scrollY: false,
      }}
    >
      <div className="hotTopic">
        {props.dataHot.map((item, index) => {
          const groupIndex = index < 3 ? index : parseInt(index % 3);
          const bgColor = HotBgColor[groupIndex];
          return (
            <div className="hot_topic" key={index} style={{ backgroundColor: bgColor }}>
              <h4 className="flex items-center">
                <Icon icon="mdi:chat" color="white" height="4vw" />
                {item.user.nickname}
              </h4>
              <p className="text-[#d7d7d7]">484万热度</p>
              <p className="h-[10.666667vw] overflow-hidden">{item.user.signature}</p>
              <img src={item.user.avatarUrl} alt="" />
            </div>
          );
        })}
      </div>
    </BetterScroll>
  );
};

export default SongHot;
