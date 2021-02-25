import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import Menu from '_common/components/Menu/Menu';
import ReadmePage from '_root/components/ReadmePage/ReadmePage';
import ChartExamplePage from '_root/components/ChartExamplePage/ChartExamplePage';
import NotFoundPage from '_root/components/NotFoundPage/NotFoundPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div id="wrapper">
        <div className="pages-wrapper">
          <Menu />
          <Switch>
            <Route exact path="/">
              <ChartExamplePage />
            </Route>
            <Route path="/readme">
              <ReadmePage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
