/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/order */
/* eslint-disable prefer-template */
/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Swiper } from 'antd-mobile';
import { Icon } from '@iconify/react';
import BetterScroll from './BetterScroll';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const SongSheet = (props) => {
  const navigate = useNavigate();
  // const history = useHistory();
  // console.log(props.dataSheet);
  const swiperParameter = {
    direction: 'vertical',
    autoplay: true,
    loop: true,
    fast: true,
    indicator: () => null,
    playTime: '2000',
    allowTouchMove: false,
  };
  return (
    // e.stopPropagation()
    <div>
      <BetterScroll
        wrapperStyle={{
          height: 'auto',
        }}
        contentStyle={{
          display: 'flex',
          width: '208vw',
        }}
        config={{
          scrollX: true,
          scrollY: false,
        }}
      >
        <div className="song_list">
          <Icon
            icon="tabler:brand-netease-music"
            color="white"
            height="4.5vw"
            className=" absolute top-[2.8vw] left-[37vw] z-[3]"
          />
          {props.dataSheet.map((item, index) => (
            <div className="song_sheet" key={index} style={{ position: 'relative' }}>
              <div className="w-[26vw] h-[31vw] bg-[#ddd] absolute top-[-1vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[-2]"></div>
              {index === 0 ? (
                <>
                  <Icon
                    icon="carbon:edt-loop"
                    color="white"
                    height="6vw"
                    className=" absolute top-[1vw] right-[2.4vw] z-[3]"
                  />
                  <Swiper style={{ '--height': '115px' }} {...swiperParameter}>
                    {item.resources.map((img, imgIndex) => (
                      <Swiper.Item key={imgIndex} catchtouchmove={() => false}>
                        <img src={img.uiElement.image.imageUrl} alt="" />
                        {/* <div className="songs_title">{img.uiElement.mainTitle.title}</div> */}
                      </Swiper.Item>
                    ))}
                  </Swiper>
                  <Swiper style={{ '--height': '54px' }} {...swiperParameter}>
                    {item.resources.map((img, imgIndex) => (
                      <Swiper.Item key={imgIndex}>
                        {/* <img src={img.uiElement.image.imageUrl} alt="" /> */}
                        <div className="songs_title">{img.uiElement.mainTitle.title}</div>
                      </Swiper.Item>
                    ))}
                  </Swiper>
                </>
              ) : (
                // navigate(`/SongDetails/${item.creativeId}`)
                <div onTouchStart={() => navigate(`/SongDetails/${item.creativeId}`)}>
                  <img src={item.uiElement.image.imageUrl} alt="" />
                  <div className="songs_title">{item.uiElement.mainTitle.title}</div>
                  <Icon
                    icon="ion:play"
                    color="white"
                    width="5vw"
                    height="5vw"
                    className=" absolute right-[2.4vw] top-[24vw]"
                  />
                  <div className=" flex items-center absolute top-[1vw] right-[2.4vw]">
                    <Icon icon="ion:play" color="white" width="3vw" height="3vw" />
                    <span style={{ fontWeight: '800', fontSize: '2.5vw', color: '#fff' }}>
                      {parseInt(item.resources[0].resourceExtInfo.playCount / 100000000) > 1
                        ? parseInt(item.resources[0].resourceExtInfo.playCount / 100000000) + '亿'
                        : parseInt(item.resources[0].resourceExtInfo.playCount / 10000) > 1
                        ? parseInt(item.resources[0].resourceExtInfo.playCount / 10000) + '万'
                        : parseInt(item.resources[0].resourceExtInfo.playCount)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </BetterScroll>
    </div>
  );
};

export default SongSheet;
