/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-template */
/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopMv } from '../service';

const StyledDiv = styled.div`
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.2vw;
    padding: 3vw 4vw;
    font-weight: 600;
  }
  .tab {
    height: 11.733333vw;
    .tablist {
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      margin-top: 3.2vw;
      /* margin-bottom: 4vw; */
      padding: 0 4vw;
      & > div {
        font-size: 4vw;
        font-weight: 500;
        color: #9599a3;
        padding-bottom: 2vw;
      }
      .tab_line {
        width: 4vw;
        height: 0.8vw;
        position: absolute;
        bottom: -3vw;
        left: 6vw;
        z-index: 1;
        background-color: #ee0a24;
        border-radius: 0.8vw;
      }
    }
  }
  .pane {
    padding: 0 4vw;
    margin-bottom: 12vw;
    box-sizing: border-box;
  }
  .panelist {
    width: 100%;

    .pane_img {
      width: 92vw;
      height: 52vw;
      position: relative;
      & > div {
        font-size: 2.6vw;
        color: #fff;
        display: flex;
        align-items: center;
        position: absolute;
        top: 2vw;
        right: 2vw;
      }
      img {
        width: 92vw;
        height: 52vw;
        border-radius: 4vw;
      }
    }
  }
`;
const Mv = () => {
  const areaArr = ['内地', '港台', '欧美', '韩国', '日本'];
  const [selectArea, setSelectArea] = useState(areaArr[0]);
  const [topmv, setTopMv] = useState([]);
  const navigate = useNavigate();
  const handleTabClick = (area) => {
    setSelectArea(area);
    getTopMv(area)
      .then((res) => {
        setTopMv(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTopMv('内地')
      .then((res) => {
        setTopMv(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(topmv);

  return (
    <StyledDiv>
      <div className="title">MV排行榜</div>
      <div className="content">
        <div className="tab">
          <div className="tablist">
            {areaArr.map((item, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(item)}
                style={{
                  color: `${selectArea === item ? '#000' : '#9599a3'}`,
                  borderBottom: `${selectArea === item ? '.8vw solid #ee0a24' : 'none'}`,
                }}
              >
                {item}
              </div>
            ))}
            {/* <div className="tab_line"></div> */}
          </div>
        </div>

        <div className="pane">
          <div className="panelist">
            {topmv.slice(0, 10).map((item, index) => (
              <div key={index}>
                <div className="pane_img" onClick={() => navigate(`/VideoPlayerView/${item.id}`)}>
                  <img src={item.cover} alt="" />
                  <div>
                    <Icon icon="ph:play-fill" color="white" style={{ marginRight: '.533333vw' }} />
                    {parseInt(item.playCount / 100000000) > 1
                      ? parseInt(item.playCount / 100000000) + '亿'
                      : parseInt(item.playCount / 10000) > 10
                      ? parseInt(item.playCount / 10000) + '万'
                      : parseInt(item.playCount)}
                  </div>
                </div>
                <div className="h-[15vw] flex flex-col justify-around">
                  <div>
                    <span
                      className="w-[5.3vw] text-[4.3vw] mr-[2.8vw] ml-[1.6vw] text-center"
                      style={{ color: `${index < 3 ? 'red' : '#999'}` }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-[4vw] font-semibold h-[5vw]">{item.name}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[5.3vw] text-[#999] text-[2vw] mr-[2.8vw] flex items-center justify-center">
                      <Icon icon="teenyicons:triangle-solid" color="#f05357" width="1.866667vw" />1
                    </div>
                    <span className="text-[#7c7c7c] text-[2vw]">
                      {/* {item.artistName} */}
                      {item.artists.reduce((res, artist, artistIndex) => {
                        if (artistIndex === 0) {
                          return artist.name;
                        }
                        return `${res}/${artist.name}`;
                      }, '')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Mv;
