/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
// 跳转
import { useNavigate } from 'react-router-dom';
import { Popup } from 'antd-mobile';
import SideBar2 from './comm/Sidebar2';
import { homepageBlockPage, detailEventHot, startTime } from '../service';
import '../font/iconfont.css';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import SongSheet from '../components/SongSheet';
import SongNew from '../components/SongNew';
import SongRank from '../components/SongRank';
import SongHot from '../components/SongHot';
import SongTime from '../components/SongTime';

const StyledDiv = styled.div`
  background-color: #f1f1f1;
  padding: 0;
  margin: 0;
  .meng {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 56vw;
    background-image: linear-gradient(to bottom, #e6e6fb, #f1f1f1);
  }
  .nav {
    /* width: 100%; */
    height: 20vw;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .icon-maikefeng {
      font-size: 6.666667vw;
      color: #3a455b;
    }
    .icon-sousuo {
      font-size: 4.266667vw;
      position: absolute;
      left: 15vw;
      top: 7.8vw;
      color: #8189a1;
      font-weight: bold;
    }
    input {
      width: 75vw;
      height: 10vw;
      border-radius: 5.333333vw;
      outline: none;
      border: 0.533333vw solid #cccef7;
      background-image: linear-gradient(to right, #d9ddfd, #eed7f0);
      font-size: 4.533333vw;
      padding-left: 8vw;
      color: #9ca3af;
      box-sizing: border-box;
      &::placeholder {
        color: #9ca3af;
      }
    }
  }
  .adm-swiper {
    margin: 0 auto;
  }
  .ant-carousel {
    height: 36vw;
  }
  .nav_list {
    width: 90.133333vw;
    margin: 0 auto;
    margin-top: 1.333333vw;
    margin-bottom: 0.8vw;
    .icon {
      flex-shrink: 0;
      width: 18vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .image {
        width: 12.4vw;
        height: 12.4vw;
        overflow: hidden;
        position: relative;
      }
      img {
        width: 12.4vw;
        height: 12.4vw;
        position: absolute;
        top: 0;
        left: -10.666667vw;
        filter: drop-shadow(10.666667vw 0 0 red);
      }
      & div {
        font-size: 3.2vw;
        color: #666666;
      }
    }
  }
  .slick-dots.slick-dots-bottom li button {
    border-radius: 50%;
  }
  /* 推荐歌单 */
  .song {
    height: 12vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
    border-top: 0.266667vw solid rgba(224, 224, 224, 0.668);
    .icon-gengduo {
      font-size: 3vw;
      color: #000000;
      font-weight: bold;
    }
    .icon-gengduo1 {
      font-size: 6vw;
      color: #000000;
    }
    .song_title {
      font-size: 4vw;
      display: flex;
      align-items: center;
      color: #374b5d;
      font-weight: bold;
    }
  }
  .song_list {
    width: 100%;
    height: auto;
    display: flex;
    overflow-x: scroll;
    padding-left: 2vw;
    box-sizing: border-box;
    padding-top: 2vw;
    position: relative;
    .song_sheet {
      margin-right: 2.666667vw;
      img {
        width: 30.666667vw;
        height: 30.666667vw;
        border-radius: 2.666667vw;
      }
      .songs_title {
        font-size: 3.2vw;
        width: 30.933333vw;
        /* margin-bottom: 4vw; */
      }
    }
  }
  /* 新歌新碟 */
  .new_song {
    /* flex-shrink: 0; */
    display: flex;
    align-items: center;
    img {
      width: 14.4vw;
      height: 14.4vw;
      border-radius: 3vw;
      margin: 2.4vw 1.333333vw 2.4vw 4vw;
    }
    h4 {
      width: 65.066667vw;
      font-size: 3.466667vw;
      color: #3e465b;
      font-weight: 500;
      margin: 0;
    }
    p {
      width: 65.066667vw;
      font-size: 3.2vw;
      color: #79838f;
      margin: 0;
      margin-top: 1vw;
    }
  }
  /* 排行榜  */
  .the_charts {
    width: 88vw;
    background-color: white;
    border-radius: 2.4vw;
    flex-shrink: 0;
    margin: 1vw 2vw 2vw 2vw;
    padding-top: 4vw;
    padding-bottom: 3.8vw;
    .song {
      padding-right: 5vw;
      padding-left: 2vw;
      span {
        font-size: 4.266667vw;
        color: #939ba1;
      }
    }
    &_songs {
      & > div:nth-of-type(2) > div:nth-of-type(1) {
        color: #818aac;
      }
      & > div:nth-of-type(3) > div:nth-of-type(1) {
        color: #cd8354;
      }
    }
  }
  .charts_songs {
    display: flex;
    align-items: center;
    &_title {
      width: 40vw;
      line-height: 5.333333vw;
    }
    img {
      width: 14.4vw;
      height: 14.4vw;
      border-radius: 3vw;
      margin: 2.7vw 1.333333vw 0 2vw;
    }
    & > div:nth-of-type(1) {
      font-size: 3.2vw;
      font-weight: 800;
      margin-right: 3vw;
      margin-left: 2.666667vw;
      color: #c28e28;
    }
    h4 {
      font-size: 3.466667vw;
      color: #3e465b;
      font-weight: 500;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0;
    }
    p {
      font-size: 3.2vw;
      color: #79838f;
      margin: 0;
      margin-top: 1vw;
    }
    & > div:nth-of-type(3) {
      font-size: 3.2vw;
      margin-right: 7.2vw;
      color: #39be84;
      margin-left: 4vw;
    }
  }
  /* 热门话题 */
  .hotTopic {
    display: flex;
    margin-bottom: 6.31vw;
    .hot_topic {
      flex-shrink: 0;
      width: 63.2vw;
      height: 28vw;
      box-sizing: border-box;
      background-color: #9c9c9c;
      border-radius: 2.666667vw;
      color: white;
      line-height: 5vw;
      padding: 4vw 2.933333vw;
      position: relative;
      margin-left: 4vw;
      h4 {
        font-size: 4vw;
        margin: 0;
      }
      p {
        width: 42vw;
        font-size: 3.2vw;
        margin: 0;
      }
      img {
        width: 13.733333vw;
        height: 13.733333vw;
        border-radius: 4vw;
        position: absolute;
        bottom: 2.666667vw;
        right: 2.666667vw;
      }
    }
  }
  /* 音乐日历 */
  .calendar {
    width: 90.933333vw;
    height: auto;
    background-color: white;
    border-radius: 4vw;
    margin-left: 2vw;
    padding-bottom: 4vw;
    margin-bottom: 14vw;
  }
  .days {
    width: 90.933333vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding-top: 4vw;
    img {
      width: 15vw;
      height: 15vw;
      border-radius: 4vw;
    }
    &_title {
      width: 60vw;
      p {
        font-size: 3.2vw;
        color: #aaadb5;
        margin: 0;
      }
      h4 {
        font-size: 3.733333vw;
        color: #3e4558;
        font-weight: 500;
        overflow: hidden;
        margin: 0;
        margin-top: 1vw;
      }
    }
  }
`;
const Home = () => {
  const [page, setPage] = useState([]);
  const [sheet, setSheet] = useState([]);
  const [snew, setSnew] = useState([]);
  const [rank, setRank] = useState([]);
  const [hot, setHot] = useState([]);
  const [time, setTime] = useState([]);
  const [visible3, setVisible3] = useState(false);

  useEffect(() => {
    homepageBlockPage()
      .then((res) => {
        setPage(res.data.data.blocks[0].extInfo.banners.map((item) => item));
        setSheet(res.data.data.blocks[1].creatives.map((item) => item));
        setSnew(res.data.data.blocks[2].creatives.map((item) => item));
        setRank(res.data.data.blocks[3].creatives.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // 热门话题
    detailEventHot()
      .then((res) => {
        // console.log(res.data.events);
        setHot(res.data.events.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // 音乐日历
    startTime()
      .then((res) => {
        setTime(res.data.data.calendarEvents.map((item) => item));
        // console.log(res.data.data.calendarEvents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(hot);
  // input标签得到焦点时跳转至Search页面
  const navigate = useNavigate();
  const handleInputFocus = () => {
    navigate('/Search');
  };

  return (
    <StyledDiv>
      <div className="page">
        <div className="meng" />
        <div className="nav">
          <Icon
            icon="ph:list-bold"
            color="#3a455b"
            className="text-[7vw]"
            onClick={() => {
              setVisible3(true);
            }}
          />
          <Popup
            visible={visible3}
            onMaskClick={() => {
              setVisible3(false);
            }}
            position="left"
            bodyStyle={{ widows: '91vw', background: 'rgb(241,241,241)' }}
          >
            <SideBar2 />
          </Popup>
          <span className="iconfont icon-sousuo" />
          <input type="text" placeholder="Love Is Gone (Acoustic)" onFocus={handleInputFocus} />
          <span className="iconfont icon-maikefeng" />
        </div>
      </div>
      <Banner dataImg={page} />
      <Nav />
      {/* 推荐歌单 */}
      <div className="song" style={{ borderTop: 'none' }}>
        <div className="song_title">
          <div>推荐歌单</div>
          <span className="iconfont icon-gengduo" />
        </div>
        <span className="iconfont icon-gengduo1" />
      </div>
      <SongSheet dataSheet={sheet} />
      {/* 新歌新碟 */}
      <div className="song">
        <div className="song_title">
          <div>新歌新碟\数字专辑</div>
          <span className="iconfont icon-gengduo" />
        </div>
        <span className="iconfont icon-gengduo1" />
      </div>
      <SongNew dataNew={snew} />
      {/* 排行榜 */}
      <div className="song">
        <div className="song_title">
          <div>排行榜</div>
          <span className="iconfont icon-gengduo" />
        </div>
        <span className="iconfont icon-gengduo1" />
      </div>
      <SongRank dataRank={rank} />
      {/* 热门话题 */}
      <div className="song">
        <div className="song_title">
          <div>热门话题</div>
          <span className="iconfont icon-gengduo" />
        </div>
        <span className="iconfont icon-gengduo1" />
      </div>
      <SongHot dataHot={hot} />
      {/* 音乐日历 */}
      <div className="song">
        <div className="song_title">
          <div>音乐日历</div>
          <span className="iconfont icon-gengduo" />
        </div>
        <span className="iconfont icon-gengduo1" />
      </div>
      <SongTime dataTime={time} />
      <div className="w-[100%] h-[6.32vw] bg-[#f1f1f1]" />
    </StyledDiv>
  );
};

export default Home;
