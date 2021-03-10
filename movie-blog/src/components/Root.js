import React, {Component} from 'react';
import Header from "./components/root/Header";
import Body from "./components/root/Body";
import Footer from "./components/root/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const Root = () => {
  return (
    <>
      <ErrorBoundary>
        <Header/>
        <Body/>
        <Footer/>
      </ErrorBoundary>
    </>
  )
}

export default Root