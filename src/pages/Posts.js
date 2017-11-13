import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';

const Posts = ({location, match}) => {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        <li><Link to={`${match.url}/1`}>Post #1</Link></li>
        <li><Link to={`${match.url}/2`}>Post #2</Link></li>
        <li><Link to={`${match.url}/3`}>Post #3</Link></li>
        <li><Link to={`${match.url}/4`}>Post #4</Link></li>
      </ul>
      <p>location.pathname: {location.pathname} 현재 브라우저상의 위치를 알려준다. 이 값은 어떤 라우트에서 렌더링하던 동일</p>
      <p>match.path: {match.path}</p>
      <p>match.url: {match.url} Posts를 보여주는 라우트에선 :id값을 설정하지 않았으니 path와 url 둘다 /posts로 동일</p>
      <Route exact path={match.url} render={() => (<h3>Please select any post</h3>)} />
      <Route path={`${match.url}/:id`} component={Post} />

    </div>
  );
};
export default Posts;
