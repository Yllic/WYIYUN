/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Icon } from '@iconify/react';
// import { useMemo } from 'react';
import Search from './views/Search';
import Login from './views/Login';
import Home from './views/Home';
import Mv from './views/Mv';
import Information from './views/Information';

import SongDetails from './views/SongDetails';
import PlayerHome from './views/PlayerHome';
import VideoPlayerView from './views/VideoPlayerView';
import SongComment from './views/SongComment';
import SongBoutique from './views/SongBoutique';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Mv" element={<Mv />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Login" element={<Login />} />

      {/* 歌单详情 */}
      <Route path="/SongDetails/:id" element={<SongDetails />} />
      {/* 歌单详情音乐播放 */}
      <Route path="/PlayerHome/:id" element={<PlayerHome />} />
      {/* mv视频播放 */}
      <Route path="/VideoPlayerView/:id" element={<VideoPlayerView />} />
      {/* 歌单详情歌曲评论 */}
      <Route path="/SongComment/:id" element={<SongComment />} />
      {/* 精品歌单 */}
      <Route path="/SongBoutique/:id" element={<SongBoutique />} />
    </Routes>
  );
};

export default App;
