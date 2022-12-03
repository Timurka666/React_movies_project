import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Main} from './layout/Main';
import React from 'react';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

