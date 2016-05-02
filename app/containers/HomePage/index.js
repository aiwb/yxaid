import React, { Component } from 'react';
import ContentHeader from '@components/contentHeader';
import styles from './index.css';

export default class HomePage extends Component {
  render() {
    return (
       <div className={`content-wrapper ${styles.contentWrapper}`}>
        <ContentHeader />
        欢迎使用 YXAid 运营助手 ~
      </div>
    );
  }
}
