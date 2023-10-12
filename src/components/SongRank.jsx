/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import BetterScroll from './BetterScroll';

const SongRank = (props) => {
  // console.log(props.dataRank);
  return (
    <BetterScroll
      wrapperStyle={{
        height: 'auto',
      }}
      contentStyle={{
        display: 'flex',
        width: '2080px',
      }}
      config={{
        scrollX: true,
        scrollY: false,
      }}
    >
      {props.dataRank.map((item, index) => (
        <div className="the_charts" key={index}>
          <div className="song" style={{ borderTop: 'none' }}>
            <div className="song_title">
              <div>{item.uiElement.mainTitle.title}</div>
              <span className="iconfont icon-gengduo"></span>
            </div>
            <span>{item.uiElement.mainTitle.titleDesc}</span>
          </div>

          <div className="the_charts_songs">
            {item.resources.map((song, songIndex) => (
              <div className="charts_songs" key={songIndex}>
                <img src={song.uiElement.image.imageUrl} alt="" />
                <div>{songIndex + 1}</div>
                <div className="charts_songs_title">
                  <h4>{song.uiElement.mainTitle.title}</h4>
                  <p>
                    {song.resourceExtInfo &&
                      song.resourceExtInfo.artists &&
                      song.resourceExtInfo.artists[0].name}
                  </p>
                </div>
                <div
                  style={{
                    color: `${song.uiElement.labelText.text === '新晋' ? '#39be84' : '#ff3836'}`,
                  }}
                >
                  {song.uiElement.labelText.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </BetterScroll>
  );
};

export default SongRank;
