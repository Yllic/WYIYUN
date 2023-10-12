/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import BetterScroll from './BetterScroll';
import { homepageDragonBall } from '../service';

// 导入SVG滤镜代码
// const svgFilter = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>";

// /homepage/dragon/ball
const Nav = () => {
  const [dragon, setDragon] = useState([]);
  useEffect(() => {
    homepageDragonBall()
      .then((res) => {
        // console.log(res.data.data);
        setDragon(res.data.data.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(dragon);
  return (
    <div className="nav_list">
      <BetterScroll
        wrapperStyle={{
          height: 'auto',
        }}
        contentStyle={{
          display: 'flex',
          width: '675px',
        }}
        config={{
          scrollX: true,
          scrollY: false,
        }}
      >
        {dragon.map((item, index) => (
          <div className="icon" key={index}>
            <div className="image">
              <img src={item.iconUrl} alt="" />
            </div>
            <div>{item.name}</div>
          </div>
        ))}
      </BetterScroll>
    </div>
  );
};

export default Nav;
