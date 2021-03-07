import React from 'react';
import BarChart from '_common/components/BarChart/BarChart';
import Helmet from 'react-helmet';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import './ChartExamplePage.scss';

const ChartExamplePage: React.FC = (): JSX.Element => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Chart example</title>
    </Helmet>

    <h1>React CI Boot </h1>

    <p>Web Component Button example:</p>
    <Button>UI5!</Button>

    <p>Chart example:</p>
    <BarChart data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
  </>
);

export default ChartExamplePage;
