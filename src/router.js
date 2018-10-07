import React, {Fragment} from 'react';
import { Router, Route, Switch, NavLink} from 'dva/router';

import IndexPage from './routes/IndexPage';
import RecommendPage from './routes/RecommendPage';
import MinePage from './routes/MinePage';
import ChatPage from './routes/ChatPage';
import SearchPage from './routes/SearchPage';
 
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route path="/recommend" exact component={RecommendPage} />
          <Route path="/mine" exact component={MinePage} />
          <Route path="/chat" exact component={ChatPage} />
          <Route path="/search" exact  component={SearchPage} />
          <Route component={IndexPage} />
        </Switch>
        <footer>
            <NavLink to="/">首页</NavLink> 
            <NavLink to="/recommend">推荐</NavLink> 
            <NavLink to="/search">搜索</NavLink> 
            <NavLink to="/chat">聊天</NavLink> 
            <NavLink to="/mine">个人中心</NavLink> 
        </footer>  
      </Fragment>
    </Router>
  );
}

export default RouterConfig;
