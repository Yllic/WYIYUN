/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkLoginQr, createLoginQrImage, createLoginQrKey } from '../service';
import storejs from 'storejs';
import { Icon } from '@iconify/react';

const Login = () => {
  const navigate = useNavigate();
  const unikey = useRef('');
  const timer = useRef(null);
  const qr = useRef('');
  const [status, setStatus] = useState();
  const checkScanStatus = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      checkLoginQr({ key: unikey.current })
        .then((res) => {
          setStatus(res.data.code);
          if ([800, 803].includes(res.data.code)) clearInterval(timer);
          if (res.data.code === 803) {
            storejs.set('cookie', res.data.cookie);
            navigate('/index');
          }
        })
        .catch((err) => {
          clearInterval(timer);
        });
    }, 1500);
  };
  useEffect(() => {
    createLoginQrKey()
      .then((res) => (unikey.current = res.data.data.unikey))
      .then((key) => createLoginQrImage({ key, qrimg: true }))
      .then((res) => (qr.current = res.data.data.qrimg))
      .then(() => checkScanStatus())
      .catch((err) => console.log(err));
    return () => clearInterval(timer.current);
  }, []);

  // 跳转至首页
  const handleIconClick = () => {
    navigate('/Home');
  };

  return (
    <div className="bg-[#fdfbfc] h-[100vh]">
      <div className=" h-[19vw] flex items-center justify-between px-[5.5vw]">
        <Icon icon="ph:arrow-left" width="30" onClick={handleIconClick} />
        <div className="text-[4vw] text-[#696969]">游客登录</div>
      </div>
      <img
        src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
        alt=""
        className="w-[38vw] mx-auto mt-[7vw] mb-[9vw] block"
      />
      <div className="h-[40vw] w-[40vw] mx-auto">
        {[800, 801].includes(status) ? (
          <div className="h-[40vw] w-[40vw] mx-auto">
            {status === 800 ? <div className="mask"></div> : null}
            <img src={qr.current} alt="" className="h-[40vw] w-[40vw] mx-auto" />
          </div>
        ) : null}
        {status === 802 ? <img src="https://picsum.photos/180/180" alt="" /> : null}
      </div>
      <div className="text-[3vw] text-[#100a09] text-center mt-[10vw]">
        使用
        <span className="text-[#2c6aa1] mx-[1.5vw]">网易云音乐APP</span>
        扫码登录
      </div>
      <div className="fixed bottom-0">
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/bg-login.png"
          alt=""
          className="w-[100vw]"
        />
      </div>
    </div>
  );
};

export default Login;
