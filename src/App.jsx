/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes, Route, Navigate, NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';
import Search from './views/Search';
import Login from './views/Login';
import Home from './views/Home';
import Mv from './views/Mv';
import Information from './views/Information';

import SongDetails from './views/SongDetails';

const App = () => {
  const location = useLocation();
  const isShowNav = useMemo(() => {
    // 当前路径为/Search时不显示底部导航栏
    return (
      location.pathname !== '/Search' &&
      location.pathname !== '/Login' &&
      location.pathname !== '/SongDetails'
    );
  }, [location]);

  const navList = [
    { to: '/Home', title: '首页', icon: <Icon icon="ri:netease-cloud-music-fill" width={22} /> },
    { to: '/Mv', title: '排行榜', icon: <Icon icon="fa6-solid:ranking-star" width={22} /> },
    { to: '/Information', title: '我的', icon: <Icon icon="majesticons:music-line" width={22} /> },
    { to: '', title: '关注', icon: <Icon icon="octicon:person-add-24" width={22} /> },
    { to: '', title: '社区', icon: <Icon icon="ph:wechat-logo" width={22} /> },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Mv" element={<Mv />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/SongDetails/:id" element={<SongDetails />} />
      </Routes>

      {isShowNav && (
        <div
          //  border-t-[.266667vw] border-[#e8e8e8]
          className="w-[100%] h-[12vw] flex items-center fixed bottom-0 left-0 right-0 bg-[#fff]"
          style={{ borderTop: '0.266667vw solid #e8e8e8' }}
        >
          {navList.map(({ to, title, icon }) => (
            <NavLink
              key={to}
              style={({ isActive }) => {
                return {
                  color: isActive ? '#eb4954' : '#9297a1',
                };
              }}
              className="w-[20%] no-underline"
              to={to}
            >
              <div className="flex items-center flex-col text-[12px]">
                {icon}
                {title}
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
