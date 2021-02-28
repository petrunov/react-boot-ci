import React from 'react';
import Helmet from 'react-helmet';
import './ReadmePage.scss';
import dirstruct from './img/dirstruct.png';

const ReadmePage: React.FC = (): JSX.Element => (
  <div id="wrapper">
    <div className="ReadmePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Boot CI</title>
      </Helmet>

      <h1>React Boot CI README</h1>
      <ul>
        <li>
          React application is setup with <a href="https://sass-lang.com/">SASS</a>,{' '}
          <a href="https://yarnpkg.com/">Yarn Package Manager</a> and{' '}
          <a href="https://www.typescriptlang.org/">TypeScript</a> in <strong>strict</strong> mode.
        </li>
        <li>
          Added{' '}
          <code>
            <a href="https://blog.angular.io/with-best-practices-from-the-start-d64881a16de8">noImplicitReturns</a>
          </code>{' '}
          to TypeScript compiler config.
        </li>
        <li>
          Document metadata is set dynamically and declaratively with{' '}
          <a href="https://github.com/nfl/react-helmet/blob/master/README.md">React Helmet</a> (e.g. page title)
        </li>
        <li>
          The extensive <a href="https://airbnb.io/javascript/react/">Airbnb React/JSX Style Guide</a> has been added to
          the project
        </li>
        <li>
          The following commads were created in the project:
          <ul>
            <li>
              <code>yarn lint</code> - check for linting errors
            </li>
            <li>
              <code>yarn lint:fix</code> - fix linting errors
            </li>
            <li>
              <code>yarn lint:styles</code> - check for linting errors specfically in CSS files with{' '}
              <a href="https://stylelint.io/">Stylelint</a>
            </li>
            <li>
              <code>yarn prettify</code> - manually execute <a href="https://prettier.io/">prettier</a> re-writing for
              js,json,css,scss,md,ts,html files
            </li>
          </ul>
        </li>
        <li>
          Code consistency is guaranteed with <strong>auto</strong>-rewriting and static code analysis through a git{' '}
          <strong>pre-commit</strong> hook (husky and lint-staged packages), enabling easier integration into CI/CD
          pipeline.
        </li>
        <li>Linting plugin for Jest unit-tests has been added.</li>
        <li>
          Linting plugin for disabling eslint comments (
          <code>
            <a href="https://mysticatea.github.io/eslint-plugin-eslint-comments/">eslint-disable-line</a>
          </code>
          ) has been added.
        </li>
        <li>
          IDE-wide editor configuration with{' '}
          <code>
            <a href="https://editorconfig.org/">.editorconfig</a>
          </code>{' '}
          file:
          <code>
            <ul>
              <li>
                <strong>indent_style: space</strong>
              </li>
              <li>
                <strong>indent_size: 2</strong>
              </li>
              <li>
                <strong>end_of_line: lf</strong>
              </li>
              <li>charset: utf-8</li>
              <li>trim_trailing_whitespace: true</li>
              <li>insert_final_newline: true</li>
            </ul>
          </code>
        </li>
        <li>
          <a href="https://prettier.io/">Prettier</a> config added:{' '}
          <code>
            <ul>
              <li>
                <strong>useTabs: false</strong>
              </li>
              <li>
                <strong>tabWidth: 2</strong>
              </li>
              <li>
                <strong>endOfLine: lf</strong>
              </li>
              <li>semi: true</li>
              <li>trailingComma: all</li>
              <li>singleQuote: true</li>
              <li>printWidth: 120</li>
              <li>arrowParens: always</li>
            </ul>
          </code>
        </li>
      </ul>
      <ul className="help">
        <li>
          Generic Help:
          <ul>
            <li>
              type <code>yarn run</code> for list of commands
            </li>
          </ul>
        </li>
        <li>
          Directory Structure:
          <br />
          <br />
          <img src={dirstruct} alt="Directory structure" />
          <br />
          <br />
        </li>
        <li>
          The actual &apos;absolute path&apos; aliases that exist{' '}
          <code>(tsconfig.paths.json and config-overrides.js)</code>:
          <ul>
            <li>
              <code>_ : src</code>
            </li>
            <li>
              <code>_root : src/modules/root</code>
            </li>
            <li>
              <code>_common : src/modules/common</code>
            </li>
            <li>
              <code>_dashboard : src/modules/dashboard</code>
            </li>
          </ul>
        </li>
        <li>Added D3.js</li>
        <li>Added menu and routing</li>
      </ul>
      <small>
        Note: It is recommended to install Prettier plugin to VSCode{' '}
        <a href="https://prettier.io/docs/en/editors.html">or your editor of choice</a> and enable formatOnSave (e.g.
        /.vscode/settings.json) - even if you don&apos;t do this, the prettify step will be applied on the pre-commit
        hook. You will never have to use `yarn prettify` manually.
      </small>
      <br />
      <br />
      <small>last update: Feb. 2021</small>
    </div>
  </div>
);

export default ReadmePage;
