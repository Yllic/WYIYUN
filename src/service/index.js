/* eslint-disable import/newline-after-import */
import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
  timeout: '15000',
});
// 获取榜单详情
export const getToplistDetail = () => http.get('/toplist/detail');
// 获取榜单播放列表
export const getPlaylistDetail = (params) => http.get('/playlist/detail', { params });
// 获取榜单Search中的猜你喜欢
export const searchHotDetail = () => http.get('/search/hot/detail');

// 获取生成二维码所需的key
export const createLoginQrKey = () => http.get('/login/qr/key');
// 获取扫码登录的二维码
export const createLoginQrImage = (params) => http.get('/login/qr/create', { params });
// 二维码检测扫码状态接口
export const checkLoginQr = (params) => http.get('/login/qr/check', { params });

// 歌单详情页 /playlist/detail?id=3136952023
export const getPlaylistDetailById = (id) => http.get(`/playlist/detail?id=${id}`);
// 喜欢这个歌单的用户也听了
export const musicSlider = (id) => http.get(`related/playlist?id=${id}`);
// 单个歌曲播放   https://netease-cloud-music-api-five-roan-88.vercel.app/song/detail?ids=2083175377
export const SongDatailIds = (id) => http.get(`song/detail?ids=${id}`);
// 音频播放  https://netease-cloud-music-api-five-roan-88.vercel.app/song/url/v1?id=2083175377&level=standard
export const SongUrlV = (id) => http.get(`song/url/v1?id=${id}&level=standard`);

// 获取banner/ 推荐歌单 / 新歌新碟
export const homepageBlockPage = () => http.get('/homepage/block/page');
// 获取nav
export const homepageDragonBall = () => http.get('/homepage/dragon/ball');
// https://netease-cloud-music-api-five-roan-88.vercel.app/topic/detail/event/hot
// 热门话题
export const detailEventHot = () => http.get('/topic/detail/event/hot?actid=111551188');
// 音乐日历
const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);
const startTimestamp = currentDate.getTime();
const endTimestamp = startTimestamp + 24 * 60 * 60 * 1000 - 1;
export const startTime = () =>
  http.get(`calendar?startTime=${startTimestamp}&endTime=${endTimestamp}`);

// MV
// https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=10&area=内地
export const getTopMv = (area) => http.get(`/top/mv?limit=50&area=${area}`);
// MV视频 https://netease-cloud-music-api-five-roan-88.vercel.app/mv/url?id=14659206
export const getMvUrl = (id) => http.get(`/mv/url?id=${id}`);
// 视频播放左边数据 https://netease-cloud-music-api-five-roan-88.vercel.app/mv/detail/info?mvid=14659206
export const getMvInfo = (id) => http.get(`mv/detail/info?mvid=${id}`);
// mv视频信息 https://netease-cloud-music-api-five-roan-88.vercel.app/mv/detail?mvid
export const getMvDetail = (id) => http.get(`mv/detail?mvid=${id}`);
