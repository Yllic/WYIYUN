/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const StyledDiv = styled.div`
  .playlist {
    width: 65vw;
    border-radius: 2vw;
    margin-left: 2.344vw;
    margin-top: 5vw;
    margin-bottom: 55px;
    background-color: #fff;
    &_title {
      display: flex;
      align-items: center;
      width: 54vw;
      height: 12.422vw;
      margin-left: 2vw;
      border-bottom: 1px solid #eaeaea;
    }
    h2 {
      font-size: 4vw;
      margin: 0 3.359vw 0 4vw;
      color: #2a344b;
      font-weight: 500;
    }
    &_icon {
      padding: 0 2vw;
      height: 5.235vw;
      background-color: #f3f4f1;
      border-radius: 3vw;
      display: flex;
      align-items: center;
      & > div {
        font-size: 2.6vw;
        color: #323c52;
        margin-left: 0.7vw;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      & > div {
        display: flex;
        align-items: center;
        height: 8vw;
        margin: 2.7vw 0;
        span {
          width: 8.83vw;
          font-size: 3.2vw;
          text-align: center;
          color: #858393;
        }
      }
    }
    ul li {
      list-style: none;
      font-size: 3.2vw;
      width: 50vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 1vw;
      color: #2a344b;
    }
  }
`;

const Card = (props) => {
  // console.log(props.dataSource);

  return (
    <StyledDiv>
      <div className="playlist">
        <div className="playlist_title">
          <h2>{props.dataSource.playlist.name}</h2>
          <div className="playlist_icon">
            <Icon icon="solar:play-bold" color="#323c52" width="10" />
            <div>播放</div>
          </div>
        </div>

        <ul>
          {props.dataSource.playlist.tracks.slice(0, 20).map((song, index) => (
            <div key={index}>
              <span key={index} style={{ color: `${index < 3 ? 'red' : '#858393'} ` }}>
                {index + 1}
              </span>
              <li key={song.id}>{song.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </StyledDiv>
  );
};

export default Card;
