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
          <p className="login-box-msg">登陆</p>
          <form action="../../index2.html" method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="邮箱" />
              <span className=" form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="密码" />
              <span className="form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <div className="icheckbox_square-blue_input" aria-checked="false" aria-disabled="false">
                      <input type="checkbox" />
                      <ins className="iCheck-helper"></ins>
                    </div> 记住
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">登陆</button>
              </div>
            </div>
          </form>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
              Google+</a>
          </div>
          <Link to="forget">忘记密码了</Link><br />
          <Link to="register" className="text-center">注册</Link>
        </div>
      </div>
    );
  }
}
