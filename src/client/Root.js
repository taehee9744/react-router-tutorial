//웹 어플리케이션에 BrowserRouter를 적용, 나중에 리덧르를 적용하게 될때
// 여기서 Provider를 통하여 프로젝트에 리덕스를 연결시켜줌
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>

  );
};

export default Root;
