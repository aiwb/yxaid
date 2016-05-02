import React, { Component } from 'react';
import ContentHeader from '@components/contentHeader';
import styles from '../index.css';

export default class Page extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader />
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">重置密码</h3>
                </div>
                <form role="form">
                  <div className="box-body">
                    <div className="form-group">
                      <label for="exampleInputEmail1">老密码</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">新密码</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">再输一次</label>
                      <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                    </div>
                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </section>
      </div>
    );
  }
}
