/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import BetterScroll from '../components/BetterScroll';
import { getToplistDetail, getPlaylistDetail, searchHotDetail } from '../service';

const StyledDiv = styled.div`
  .search {
    width: 91vw;
    height: 20vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: relative;
    input {
      width: 72vw;
      height: 10vw;
      outline: none;
      border: none;
      font-size: 3vw;
      padding-left: 11vw;
      box-sizing: border-box;
      border-radius: 6.666667vw;
      &::placeholder {
        color: #9b9b9b;
      }
    }
    div {
      font-size: 3.7vw;
      color: #283349;
      font-weight: 600;
    }
  }
  .search_nav {
    display: flex;
    align-items: center;
    margin-top: 3vw;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25vw;
      border-right: 0.4vw solid #e3e5ea;
      &:nth-of-type(4) {
        border-right: none;
      }
      span {
        font-size: 3.4vw;
        margin-left: 2vw;
        font-weight: 800;
      }
    }
  }
  .search_like {
    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3vw;
      box-sizing: border-box;
      margin-top: 5vw;
      h4 {
        font-size: 4vw;
        color: #283349;
        font-weight: 600;
        margin: 0;
      }
    }
    &__name {
      display: flex;
      flex-wrap: wrap;
      padding: 0 3vw;
      box-sizing: border-box;
      & > div {
        font-size: 3.5vw;
        padding: 2vw 3vw;
        border-radius: 5.333333vw;
        margin-top: 3vw;
        margin-right: 2vw;
        background-color: #fff;
        color: #535c6a;
      }
    }
  }
`;

const Search = () => {
  // const [toplist, setToplist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [datail, setDatail] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    getToplistDetail()
      .then((res) => {
        return Promise.all(
          res.data.list.slice(0, 4).map((item) => getPlaylistDetail({ id: item.id })),
        );
      })
      .then((res) => {
        // console.log(res);
        setPlaylist(res.map((item) => item.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // 猜你喜欢
  useEffect(() => {
    searchHotDetail()
      .then((res) => setDatail(res.data.data.map((item) => item)))
      .catch((err) => console.log(err));
  }, []);

  // 点击刷新
  const handleRefreshClick = () => {
    const newStartIndex = (startIndex + 5) % datail.length;
    setStartIndex(newStartIndex);
  };
  const likeData = datail.slice(startIndex, startIndex + 5);
  // 导航部分
  const title = ['歌手', '曲风', '专区', '识曲'];
  const icon = [
    'octicon:person-fill-16',
    'clarity:book-solid',
    'game-icons:musical-notes',
    'ph:microphone-fill',
  ];
  // 跳转至首页
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate('/Home');
  };
  return (
    <div style={{ backgroundColor: '#f4f4f4' }}>
      <StyledDiv>
        <div className="search">
          <Icon icon="ph:arrow-left" color="black" width="30" onClick={handleIconClick} />
          <input type="text" placeholder="7 % - XMASwu(吴骜)" />
          <div>搜索</div>
          <Icon
            icon="tabler:search"
            color="#6f778f"
            width="16"
            style={{ position: 'absolute', top: '8vw', left: '13.68vw' }}
          />
        </div>
        <div className="search_nav">
          {title.map((item, index) => (
            <div key={index}>
              <Icon icon={icon[index]} color="red" style={{ width: '5vw', height: '5vw' }} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="search_like">
          <div className="search_like__title">
            <h4>猜你喜欢</h4>
            <Icon
              icon="mdi:refresh"
              color="#acafae"
              style={{ width: '5vw', height: '5vw' }}
              onClick={handleRefreshClick}
            />
          </div>
          <div className="search_like__name">
            {likeData.map((item, index) => (
              <div key={index}>{item.searchWord}</div>
            ))}
          </div>
        </div>
      </StyledDiv>

      <BetterScroll
        wrapperStyle={{
          width: '100vw',
          height: 'auto',
        }}
        contentStyle={{
          display: 'flex',
          width: '1500px',
        }}
        config={{
          scrollX: true,
          scrollY: false,
        }}
      >
        {playlist.map((item, index) => (
          <Card dataSource={item} key={index} />
        ))}
      </BetterScroll>
    </div>
  );
};

export default Search;
