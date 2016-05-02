import React, { Component } from 'react';
import ContentHeader from '@components/contentHeader';
import styles from './index.css';

export default class Page extends Component {
  render() {
    return (
      <div>
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>
          <form action="../../index.html" method="post">
            <div className="form-group has-feedback">
              <input type="email" className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input type="password" className="form-control" placeholder="Retype password" />
              <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <div className="icheckbox_square-blue" aria-checked="false" aria-disabled="false"
                    style="">
                      <input type="checkbox"
                      style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);" />
                    <ins className="iCheck-helper"
                    style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins>
                    </div> I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat">
              <i className="fa fa-google-plus"></i> Sign up using
              Google+
            </a>
          </div>
          <a href="login.html" className="text-center">I already have a membership</a>
        </div>
      </div>
      </div>
    );
  }
}
