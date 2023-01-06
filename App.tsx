import * as React from 'react';
import { RecoilRoot } from 'recoil';
import { MyCanvas } from './MyCanvas';
import './style.css';

export default function App() {
  return (
    <div>
      <RecoilRoot>
      <h1>Hello StackBlitz!</h1>
      <MyCanvas/>
      </RecoilRoot>
    </div>
  );
}
