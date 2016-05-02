import React, { Component } from 'react';
import { Link } from 'react-router';
import ContentHeader from '@components/contentHeader';
import styles from './index.css';

export default class Page extends Component {
  render() {
    return (
      <div className="register-box">
        <div className="register-logo">
          <Link to="/"><b>YXAid</b>营销助手v0.0.1</Link>
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">注册</p>
          <form action="../../index.html" method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="邮箱" />
              <span className=" form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="密码" />
              <span className=" form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="再输一次" />
              <span className=" form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">注册</button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat">
              <i className="fa fa-google-plus"></i> 用Google账号登陆
            </a>
          </div>
          <Link to="login" className="text-center">已有账号</Link>
        </div>
      </div>
    );
  }
}
