import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavComponent extends Component {
  pushMenu() {
    let body = document.body;

    if (body.clientWidth > 768) {
      if (body.className.indexOf('sidebar-collapse') === -1) {
        body.className += ' sidebar-collapse';
      } else {
        body.className = body.className.replace(' sidebar-collapse', '');
      }
    } else {
      if (body.className.indexOf('sidebar-open') === -1) {
        body.className += ' sidebar-open';
      } else {
        body.className = body.className.replace(' sidebar-open', '');
      }
    }
  }

  render() {
    return (
        <nav className="navbar navbar-static-top">
          <a href="javascript:;" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li>
            <Link to="login">登录</Link>
          </li>
          <li>
            <Link to="register">注册</Link>
          </li>
          <li>
            <a href="javascript:;" data-toggle="control-sidebar">
              <i className="fa fa-gears"></i>
            </a>
          </li>
        </ul>
      </div>
        </nav>
    );
  }
}
