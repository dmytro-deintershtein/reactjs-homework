import React, {Component} from 'react';
import Header from "./components/root/Header";
import Body from "./components/root/Body";
import Footer from "./components/root/Footer";

class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Root