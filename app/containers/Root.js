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
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('../components/DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
