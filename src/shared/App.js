//어떤 주소로 왔을때 무엇을 보여줄지 정의
import React from 'react';
//Siwtch 라우트들을 이 컴퍼넌트에 감싸면 매칭되는
//첫번째 라우트만 보여주고 나머지는 보여주지 않는다.
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}
export default App;
