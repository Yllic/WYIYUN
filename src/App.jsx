/* eslint-disable no-console */
import React from 'react';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';

export default function App() {
  const fn = () => {
    getLoginQrCKey()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>修改项目，实时更新</h1>
      <Button type="primary" onClick={fn}>
        按钮
      </Button>
    </div>
  );
}
