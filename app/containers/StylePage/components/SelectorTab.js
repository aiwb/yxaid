import React, { Component } from 'react';
import styles from '../index.css';

export default class Home extends Component {
  componentDidMount() {
    $('#root').on('click', '.subTab .subTabItem', function(e) {
      e.preventDefault();
      $('.subTab .subTabItem').removeClass(styles.subTabItemActive)
      $(this).addClass(styles.subTabItemActive)
    });
  }

  onTabClick = (e) => {
    $(e.currentTarget).siblings().removeClass(styles.tabItemActive)
        .end().addClass(styles.tabItemActive);
  }

  render() {
    return (
      <div className={styles.tabWrapper}>
        <ul className={`tab ${styles.tab}`}>
          <li className={`tabItem ${styles.tabItem} ${styles.tabItemActive}`} onClick={this.onTabClick}>
            <a href="javascript:;">标题</a>
            <ul className={`subTab ${styles.subTab}`}>
              <li className={`subTabItem ${styles.subTabItem} ${styles.subTabItemActive}`}>
                <a href="javascript:;">编号标题</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">框线标题</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">底色标题</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">图片标题</a>
              </li>
            </ul>
          </li>
          <li className={`tabItem ${styles.tabItem}`} onClick={this.onTabClick}>
            <a href="javascript:;">正文</a>
             <ul className={`subTab ${styles.subTab}`}>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">边框内容</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">底色内容</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">序号/轴线</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">单页</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">竖排</a>
              </li>
            </ul>
          </li>
          <li className={`tabItem ${styles.tabItem}`} onClick={this.onTabClick}>
            <a href="javascript:;">图片</a>
             <ul className={`subTab ${styles.subTab}`}>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">图片样式</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">分隔线</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">引导图</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">背景图</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">其他</a>
              </li>
            </ul>
          </li>
          <li className={`tabItem ${styles.tabItem}`} onClick={this.onTabClick}>
            <a href="javascript:;">图文</a>
             <ul className={`subTab ${styles.subTab}`}>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">上下图文</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">左右图文</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">背景/信纸</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">音频/视频</a>
              </li>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">对话</a>
              </li>
            </ul>
          </li>
          <li className={`tabItem ${styles.tabItem}`} onClick={this.onTabClick}>
            <a href="javascript:;">布局</a>
             <ul className={`subTab ${styles.subTab}`}>
              <li className={`subTabItem ${styles.subTabItem}`}>
                <a href="javascript:;">所有布局</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
