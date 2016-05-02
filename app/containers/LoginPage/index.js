import React, { Component } from 'react';
import { Link } from 'react-router';
import ContentHeader from '@components/contentHeader';
import styles from './index.css';

export default class Page extends Component {
  render() {
    return (
      <div class="login-box">
        <div class="login-logo">
          <Link to="/"><b>YXAid</b>营销助手</Link>
        </div>
        <div class="login-box-body">
          <p class="login-box-msg">登陆</p>
          <form action="../../index2.html" method="post">
            <div class="form-group has-feedback">
              <input type="email" class="form-control" placeholder="Email" />
              <span class=" form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input type="password" class="form-control" placeholder="密码" />
              <span class="form-control-feedback"></span>
            </div>
            <div class="row">
              <div class="col-xs-8">
                <div class="checkbox icheck">
                  <label>
                    <div class={styles.icheckbox_squareBlue} aria-checked="false" aria-disabled="false">
                      <input type="checkbox" />
                      <ins class="iCheck-helper"></ins>
                    </div> 记住
                  </label>
                </div>
              </div>
              <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">登陆</button>
              </div>
            </div>
          </form>

          <div class="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
              Google+</a>
          </div>
          <Link to="forget">忘记密码了</Link><br />
          <Link to="register" class="text-center">注册</Link>
        </div>
      </div>
    );
  }
}
