import { app, BrowserWindow, Menu, crashReporter, shell } from 'electron';

import React, { Component, ReactLayout } from 'react';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PageActions from '../../actions/index';

class Page extends Component {
  componentDidMount() {
  }

  render() {

    console.log(app, BrowserWindow, Menu, crashReporter, shell);

    return (
      <div className={`content-wrapper content-wrapper__style-page`}>
         测试页面
         <a href="javascript:;" onClick={()=> app.hide() }>关闭</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
