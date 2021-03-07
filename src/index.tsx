import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import Menu from '_common/components/Menu/Menu';
import ReadmePage from '_root/components/ReadmePage/ReadmePage';
import ChartExamplePage from '_root/components/ChartExamplePage/ChartExamplePage';
import NotFoundPage from '_root/components/NotFoundPage/NotFoundPage';
import OrgChartExamplePage from '_root/components/OrgChartExamplePage/OrgChartExamplePage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <div id="wrapper">
          <div className="pages-wrapper">
            <Menu />
            <Switch>
              <Route exact path="/">
                <ChartExamplePage />
              </Route>
              <Route exact path="/org1">
                <OrgChartExamplePage />
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
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
