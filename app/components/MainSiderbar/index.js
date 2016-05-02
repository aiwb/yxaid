import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li>
              <Link to='/app/style'>
                <i className="fa fa-connectdevelop" />
                <span>样式</span>
              </Link>
            </li>
            <li>
              <Link to='/app/setting'>
                <i className="fa fa-connectdevelop" />
                <span>设置</span>
              </Link>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
};
