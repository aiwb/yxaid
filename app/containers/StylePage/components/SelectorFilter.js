import React, { Component } from 'react';
import styles from '../css/SelectorFilter.css';

export default class Home extends Component {
  onClick = (e) => {
    console.log(111111111111);
    e.preventDefault();
    $(e.currentTarget).siblings().removeClass(styles.active)
        .end().addClass(styles.active);
  }

  render() {
    return (
      <div className={`filter ${styles.filter}`}>
        排序：
        <a onClick={this.onClick} className={styles.active} href="javascript:;">试用频率</a>
        <a onClick={this.onClick} href="javascript:;">收藏时间</a>
      </div>
    );
  }
}
