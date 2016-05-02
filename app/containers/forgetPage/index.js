import React, { Component } from 'react';
import { Link } from 'react-router';
import ContentHeader from '@components/contentHeader';
import styles from './index.css';

export default class Page extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <Link to="/"><b>YXAid</b>营销助手v0.0.1</Link>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">找回密码</p>
          <form action="../../index2.html" method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" />
              <span className=" form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">找回</button>
              </div>
            </div>
          </form>

          <Link to="login">登陆</Link><br />
          <Link to="register" className="text-center">注册</Link>
        </div>
      </div>
    );
  }
}
