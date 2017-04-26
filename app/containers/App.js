import React, { Component, PropTypes } from 'react';
import MainHeader from '../components/MainHeader';
import MainSiderbar from '../components/MainSiderbar';
import MainFooter from '../components/MainFooter';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <MainHeader />
        <MainSiderbar />
        {this.props.children}
      </div>
    );
  }
}
