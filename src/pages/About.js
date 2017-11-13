import React from 'react';
//URL 쿼리를 해석하기 위한 lib
import queryString from 'query-string';
//{match} About 컴퍼넌트를 불러오는 App에서 정의한 /about/:name에서
//:name에 대한 값을 받아서 사용할 수 있다
const About = ({location, match}) => {
  const query = queryString.parse(location.search);
  const detail = query.detail === 'true';
  return (
    <div>
      <h2>About {match.params.name}</h2>
      {detail && 'detail: blahblah'}
    </div>
  );
};
export default About;
