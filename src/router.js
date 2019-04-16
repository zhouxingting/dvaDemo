import React from 'react';
import { Spin } from 'antd';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import app from './index';
import styles from './index.css';

/**
 * 另一种加载动画方式
 * dynamic.setDefaultLoadingComponent(() => {
 * return <Spin size="large" className={styles.globalSpin} />;
 * });
 */

const IndexPage = dynamic({
  app,
  models: () => [],
  component: () => import('./routes/IndexPage'),
  LoadingComponent: () => (
    <div className={styles.spinStyle}>
      <Spin size="large" tip="Loading..." />
    </div>
  )
});

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
