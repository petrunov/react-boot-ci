import React from 'react';
import Helmet from 'react-helmet';
import './OrgChartExamplePage.scss';
import OrgChartRoot from '../OrgChartRoot/OrgChartRoot';
import bigNode from './big-node-data';

const OrgChartExamplePage: React.FC = (): JSX.Element => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Chart example</title>
    </Helmet>

    <p>Org Chart example:</p>
    <OrgChartRoot node={bigNode} />
  </>
);
export default OrgChartExamplePage;
