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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Mv" element={<Mv />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/SongDetails/:id" element={<SongDetails />} />
      <Route path="/PlayerHome/:id" element={<PlayerHome />} />
      <Route path="/VideoPlayerView/:id" element={<VideoPlayerView />} />
    </Routes>
  );
};

export default App;
