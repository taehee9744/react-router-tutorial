import React from 'react';

const Post = ({location, match}) => {
  return (
    <div>
      <h3>포스트 {match.params.id}</h3>
      <p>location.pathname: {location.pathname} 현재 브라우저상의 위치를 알려준다. 이 값은 어떤 라우트에서 렌더링하던 동일</p>
      <p>match.path: {match.path} Post를 보여주는 라우트에선 path의 경우엔 라우트에서 설정한 path값이 그대로 나타남</p>
      <p>match.url: {match.url} url의 경우엔 :id 부분에 값이 들어간 상태로 나타남</p>
    </div>
  );
};
export default Post;
