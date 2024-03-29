import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';

const app = dva({
  history: createHistory(),
  onError(error) {
    console.log({ title: error.message, type: 'notice' });
  },
});
app.use(createLoading());
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app;  // eslint-disable-line

















