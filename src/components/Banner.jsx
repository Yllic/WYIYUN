/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Carousel, ConfigProvider } from 'antd';

const contentStyle = {
  margin: 0,
  height: '36vw',
  width: '90vw',
  borderRadius: '4vw',
  margin: '0 auto',
};
const Banner = (props) => {
  // console.log(props.dataImg);
  const bannerImg = props.dataImg.map((item, index) => (
    <div key={index}>
      <img src={item.pic} alt="" style={contentStyle} />
    </div>
  ));
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            /* here is your component tokens */
            dotActiveWidth: 8,
            dotHeight: 8,
            dotWidth: 8,
            marginXXS: 3,
          },
        },
      }}
    >
      <Carousel autoplay>{bannerImg}</Carousel>
    </ConfigProvider>
  );
};

export default Banner;
