import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

@connect(({ example, loading }) => ({
  example,
  loading: loading.effects['example/fetchProvince'],
}))

class IndexPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'example/fetchProvince',
    })
  }
  render() {
    console.log(this.props.loading, this.props.example);
    return (
      <Suspense fallback={<div>组件加载中...</div>}>
        <div className={styles.normal}>
          <h1 className={styles.title}>www</h1>
        </div>
      </Suspense>
    );
  };
}

IndexPage.propTypes = {
};

export default IndexPage;

