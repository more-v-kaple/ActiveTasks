import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root'));

injectGlobal`
  body {
    padding: 30px;
    margin: 0 auto;
  };
  p {
    margin: 0;
    padding: 0;
  }
  .verticalAlign {
    display: flex;
    align-items: center;
    align-content: flex-start;
  }
  .section {
    padding: 10px 5px;
  }
  .container {
    padding: 15px 0;
  }
  .column {
    margin-right: 100px;
    flex-direction: column;
  }
  .title {
    font-size: 20px;
    color: #365d95;
    font-weight: 700;
  }
`