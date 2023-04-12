import * as React from 'react';
import TreeGrid, { IHeader } from './component/TreeGrid';
import { data, header } from './component/TreeGridData';
import Spinner from 'react-bootstrap/Spinner';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <TreeGrid headers={header} data={data} />
      <hr />
    </div>
  );
}
