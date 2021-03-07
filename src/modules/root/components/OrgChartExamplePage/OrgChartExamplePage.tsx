import React from 'react';
import Helmet from 'react-helmet';
import './OrgChartExamplePage.scss';
import OrgChartRoot from '../OrgChartRoot/OrgChartRoot';

const OrgChartExamplePage: React.FC = (): JSX.Element => {
  const node = {
    name: 'Svetoslav Spasov',
    position: 'CEO',
    children: [
      {
        name: 'Vladislav Vlaevski',
        position: 'CTO',
        children: [],
      },
      {
        name: 'Dimitar Angelov',
        position: 'SEM',
        children: [
          {
            name: 'Vesselin Petrunov',
            position: 'Manager',
            children: [
              {
                name: 'Violeta Veleva',
                position: 'Development Lead',
                children: [],
              },
              {
                name: 'Zdravko Danailov',
                position: 'Senior Software Engineer',
                children: [],
              },
              {
                name: 'Staniel Petrov',
                position: 'Software Engineer',
                children: [],
              },
              {
                name: 'Niki Minev',
                position: 'Junior Software Engineer',
                children: [],
              },
              {
                name: 'Marjan Velkovski',
                position: 'Software Engineer',
                children: [],
              },
              {
                name: 'Ljupcho Ristovski',
                position: 'Senior Software Engineer',
                children: [],
              },
              {
                name: 'Kaloyan Kolev',
                position: 'Software Engineer',
                children: [],
              },
              {
                name: 'Momchil Dzhambazov',
                position: 'Software Engineer',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chart example</title>
      </Helmet>

      <p>Org Chart example:</p>
      <OrgChartRoot node={node} />
    </>
  );
};

export default OrgChartExamplePage;
