/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import { Icon } from '@iconify/react';
// import { Tabs } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCommentPlayList, getPlaylistDetailById } from '../service';

const SongComment = () => {
  const [comm, setComm] = useState();
  const [playId, setPlayId] = useState();
  const location = useLocation();
  useEffect(() => {
    getCommentPlayList(location.pathname.split('/')[2])
      .then((res) => {
        setComm(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    getPlaylistDetailById(location.pathname.split('/')[2])
      .then((res) => {
        setPlayId(res.data.playlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(comm);
  // console.log(playId);
  return (
    <div className="w-[100%] h-[100%]">
      <div className="h-[11.8vw] flex items-center justify-between px-[4vw] box-border">
        <div className="flex items-center">
          <Icon
            icon="solar:arrow-left-linear"
            className="text-[7vw]"
            onClick={() => window.history.back()}
          />
          <div className="text-[4.2vw] ml-[4.7vw]">评论({playId?.commentCount})</div>
        </div>
        <Icon icon="clarity:share-line" className="text-[6vw]" />
      </div>
      {/* 简介 */}
      <div className="flex items-center justify-between py-[3.2vw]  px-[4vw] box-border">
        <img src={playId?.coverImgUrl} alt="" className="w-[20vw] h-[20vw] bg-slate-300" />
        <div className="w-[60vw] text-[4vw]">
          <p>{playId?.name}</p>
          <p className="text-[#686868] text-[3.46vw]">
            by <span className="text-[#557e97]">{playId?.creator.nickname}</span>
          </p>
        </div>
        <Icon icon="ep:arrow-right" className="text-[5vw] text-[#a9a9a9]" />
      </div>
      <div className="h-[2.13vw] bg-[#f8f8f8] " />
      {/* 评论区 */}
      <div className=" mt-[4.26vw]">
        <div className=" h-[11.7vw] flex items-center justify-between px-[4vw] box-border">
          <div className="text-[4vw]">评论区</div>
          <div className=" flex items-center text-[#a9a9a9]">
            <div className="text-[#000]">推荐</div>
            <div className="ml-[6vw]">最热</div>
            <div className="ml-[6vw]">最新</div>
          </div>
        </div>
        {/* 评论 */}
        <div>
          {/* 单个评论 */}
          {comm?.hotComments.map((item) => (
            <div
              key={item.commentId}
              className=" px-[4vw] pb-[3vw] box-border"
              style={{ borderBottom: '0.13vw solid #e9e9e9' }}
            >
              <div className="flex items-center justify-between mt-[2vw]">
                <div className="flex items-center">
                  <img
                    src={item?.user.avatarUrl}
                    alt=""
                    className="w-[11vw] h-[11vw] rounded-[50%]"
                  />
                  <div className="w-[60vw] ml-[2vw]">
                    <h4 className="m-0 text-[#646464] text-[3.37vw]">
                      {item?.user.nickname}
                      {/* {item?.user.vipRights.redplus?.iconUrl
                        ? item?.user.vipRights.redplus?.iconUrl
                        : ''} */}
                      <img
                        src={item?.user.vipRights?.redplus?.iconUrl}
                        alt=""
                        className="w-[6vw]"
                      />
                    </h4>
                    <p className="m-0 text-[#a9a9a9] text-[2vw] mt-[1vw]">
                      {item?.timeStr} {item?.ipLocation.location ? item?.ipLocation.location : ''}
                    </p>
                  </div>
                </div>
                <div className="text-[#a9a9a9] text-[3vw]">
                  <span>{item?.likedCount}</span>
                  <Icon icon="iconamoon:like-light" width="4vw" className=" ml-[1vw] mb-[-0.4vw]" />
                </div>
              </div>
              <div className="ml-[13vw] w-[76vw]">{item?.content}</div>
              <div className="text-[#557e97] text-[3vw] ml-[13vw] mt-[4vw]">
                14条回复
                <Icon icon="ep:arrow-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongComment;
