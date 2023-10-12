/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import BetterScroll from './BetterScroll';

const SongNew = (props) => {
  // console.log(props.dataNew);
  return (
    <BetterScroll
      wrapperStyle={{
        height: 'auto',
      }}
      contentStyle={{
        display: 'flex',
        width: '1320px',
      }}
      config={{
        scrollX: true,
        scrollY: false,
      }}
    >
      {props.dataNew.map((item, index) => (
        <div className="new_item" key={index}>
          {item.resources.map((newsong, innerIndex) => (
            <div className="new_song" key={innerIndex}>
              <img src={newsong.uiElement.image.imageUrl} alt="" />
              <div>
                <h4>{newsong.uiElement.mainTitle && newsong.uiElement.mainTitle.title}</h4>
                <p>{newsong.uiElement.subTitle && newsong.uiElement.subTitle.title}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </BetterScroll>
  );
};

export default SongNew;
