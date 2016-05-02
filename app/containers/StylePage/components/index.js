import React, { Component, ReactLayout } from 'react';
import { hashHistory } from 'react-router';
import styles from '../index.css';
import SelectorTab from './SelectorTab';
import SelectorFilter from './SelectorFilter';

export default class StylePage extends Component {
  static childContextTypes = {
    location: React.PropTypes.object
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    let windowHeight = window.innerHeight;
    let content = document.querySelector(`.${styles.content}`);
    let editorTemplateList = document.querySelector(`.${styles.editorTemplateList}`);
    editorTemplateList.style.height = `${windowHeight-140}px`;
    content.style.height = `${windowHeight}px`;
    content.parentNode.style.height = `${windowHeight}px`;
    // data-reactroot
    // let reactRoot = ReactLayout._getRootNode();
    // reactRoot.className = "ui middle aligned center aligned grid"
    // this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)



    console.log('props: ', this.props);
    console.log('history: ', history);

    this.ue = UE.getEditor('container');
  }

  routerWillLeave(nextLocation) {
    alert('are you sure?');

    if (!this.state.isSaved) {
      return 'Your work is not saved! Are you sure you want to leave?'
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.ue = UE.getEditor('container');
  }

  onTplItemClick = (e) => {
    var tplDom = $(e.currentTarget).find('.tpl').html();
    this.ue.setContent(tplDom, true);
  }

  render() {
    let self = this;
    let data = [{
      id: 28,
      name: '引导阅读原文',
      html:
      `<section class="135editor" style="position:static;box-sizing: border-box;" data-id="85837">
          <section style="border: 0px; width: 100%; padding: 0px; color: inherit; margin: 0px; clear: both;">
            <section class="layout" style="border: 0px none; width: 33%; float: left; padding: 0px;">
              <section class="135brush" style="color: inherit; margin: 0px; padding: 0px 8px; ">
                <p style="text-align: center; line-height: 1.5em;">第一栏</p>
                <p style="text-align:center;line-height: 1.5em;">请输入内容</p>
              </section>
            </section>
            <section class="layout 135editor" style="border: 0px none;  width: 67%; float: left;">
              <section style="border: 0px none;  width: 50%; float: left; padding: 0px;" class="layout">
                <section class="135brush" style="color: inherit;margin: 0px; padding: 0px 8px;">
                  <p style="text-align:center;line-height: 1.5em;">第二栏</p>
                  <p style="text-align:center; line-height: 1.5em;">请输入内容</p>
                </section>
              </section>
              <section class="layout" style="border: 0px none;  width: 50%; float: left; padding: 0px;">
                <section class="135brush" style="color: inherit;margin: 0px;padding: 0px 8px;">
                  <p style="text-align:center;line-height: 1.5em;">第三栏</p>
                  <p style="text-align:center;line-height: 1.5em;">请输入内容</p>
                </section>
              </section>
            </section>
          </section>
          <section style="display: block; width: 0; height: 0; clear: both;"></section>
        </section>
      `
    }]

    let html = `<li title="ID:28,引导阅读原文" class="recomment-style tag-recommend tagtpl-107  tagtpl-233  tagtpl-238 mix" data-id="28">
        <section class="135editor" style="position:static;box-sizing: border-box;" data-id="28">
          <p class="135brush" style="margin-top: 0px; margin-bottom: 0px; font-size: 15.555556297302246px; padding: 0px; max-width: 100%; min-height: 1.5em; line-height: 2em; word-wrap: break-word; word-break: normal; border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; color: rgb(255, 255, 255); text-align: center; background-color: rgb(89, 150, 235);" data-brushtype="text">↓↓↓ 点击"阅读原文" 【查看更多信息】 &nbsp;</p>
        <section style="display: block; width: 0; height: 0; clear: both;"></section>
        </section>
        <div style="position:absolute;bottom:0px;right:0px;width:150px;text-align:right;">
          <a class="btn btn-xs" style="color:rgb(255, 129, 36);font-size:20px;" href="javascript:;" data-url="/favorites/add" onclick="return addtofavor('EditorStyle','28',this);">
            <i class="fa fa-heart-o" data-toggle="tooltip" data-container="body" data-placement="top" title="" data-original-title="收藏"></i>
          </a>
        </div>
      </li>
      <li title="ID:85837,三栏分布" class="recomment-style tag-recommend tagtpl-227 mix" data-id="85837">
        <section class="135editor" style="position:static;box-sizing: border-box;" data-id="85837">
          <section style="border: 0px; width: 100%; padding: 0px; color: inherit; margin: 0px; clear: both;">
            <section class="layout" style="border: 0px none; width: 33%; float: left; padding: 0px;">
              <section class="135brush" style="color: inherit; margin: 0px; padding: 0px 8px; ">
                <p style="text-align: center; line-height: 1.5em;">第一栏</p>
                <p style="text-align:center;line-height: 1.5em;">请输入内容</p>
              </section>
            </section>
            <section class="layout 135editor" style="border: 0px none;  width: 67%; float: left;">
              <section style="border: 0px none;  width: 50%; float: left; padding: 0px;" class="layout">
                <section class="135brush" style="color: inherit;margin: 0px; padding: 0px 8px;">
                  <p style="text-align:center;line-height: 1.5em;">第二栏</p>
                  <p style="text-align:center; line-height: 1.5em;">请输入内容</p>
                </section>
              </section>
              <section class="layout" style="border: 0px none;  width: 50%; float: left; padding: 0px;">
                <section class="135brush" style="color: inherit;margin: 0px;padding: 0px 8px;">
                  <p style="text-align:center;line-height: 1.5em;">第三栏</p>
                  <p style="text-align:center;line-height: 1.5em;">请输入内容</p>
                </section>
              </section>
            </section>
          </section>
          <section style="display: block; width: 0; height: 0; clear: both;"></section>
        </section>
        <div style="position:absolute;bottom:0px;right:0px;width:150px;text-align:right;">
          <a class="btn btn-xs" style="color:rgb(255, 129, 36);font-size:20px;" href="javascript:;" data-url="/favorites/add" onclick="return addtofavor('EditorStyle','85837',this);">
            <i class="fa fa-heart-o" data-toggle="tooltip" data-container="body" data-placement="top" title="" data-original-title="收藏"></i>
          </a>
        </div>
      </li>
      <li title="ID:85890,特别通知" class="recomment-style tag-recommend mix" data-id="85890">
        <section class="135editor" style="position:static;box-sizing: border-box;" data-id="85890">
        <section class="layout" style="max-width: 100%; margin: 2px auto; padding: 0px;">
        <section style="max-width: 100%;margin-left:1em; line-height: 1.4em;">
        <span style="font-size:14px">
        <strong style="color:rgb(62, 62, 62); line-height:32px; white-space:pre-wrap">
          <span class="135brush" data-brushtype="text" data-mce-style="color: #a5a5a5;" placeholder="关于135编辑器" style="background-color:rgb(86, 159, 8); border-radius:5px; color:rgb(255, 255, 255); padding:4px 10px">关于135编辑器</span>
        </strong>
        </span>
        </section>
        <section class="135brush" data-style="color:rgb(89, 89, 89); font-size:14px; line-height:28px" style="font-size: 1em; max-width: 100%; margin-top: -0.7em; padding: 10px 1em; border: 1px solid rgb(192, 200, 209); border-radius: 0.4em; color: rgb(51, 51, 51); background-color: rgb(239, 239, 239);">
        <p>
          <span style="background-color: rgb(255, 255, 0);">跟着135读好书运动开始啦！咱们微信编辑/运营者要从内到外武装自己！近期，小编编整理了一系列有用的电子书分享给大家，另外有的书本可能页面有点模糊，希望大家多担待！如果内容真的特别喜欢，还是要去买实体书本哦~</span>
        </p>
        <p>
          <br />
        </p>
        <p>这几天分享给大家的是《失控》电子书，请扫码关注<span style="line-height: inherit;">135编辑器订阅号后台留言“失控”领取。</span></p>
          <p style="text-align: center;">
            <img alt="" src="http://image1.135editor.com/cache/remote/aHR0cHM6Ly9tbWJpei5xbG9nby5jbi9tbWJpei95cVZBcW9adkRpYkhVWUwxVzRqVnRLczJjdWo4bGljT2liUFhpYmhGb2tKRUFDc2g5MVppY1FkMkN5RnBNa3dqWDBTMnpKTHFpYXFPZ3REUkNpYkVQSTlkcTZpYzJBLzA=" />
          </p>
          <p style="text-align: center;">
            <strong>
              <span style="background-color: rgb(255, 0, 0);">更多书籍，敬请期待</span>
            </strong>
          </p>
            </section>
          </section>
          <section style="display: block; width: 0; height: 0; clear: both;"></section>
        </section>
        <div style="position:absolute;bottom:0px;right:0px;width:150px;text-align:right;">
          <a class="btn btn-xs" style="color:rgb(255, 129, 36);font-size:20px;" href="javascript:;" data-url="/favorites/add" onclick="return addtofavor('EditorStyle','85890',this);">
            <i class="fa fa-heart-o" data-toggle="tooltip" data-container="body" data-placement="top" title="" data-original-title="收藏"></i>
          </a>
        </div>
      </li>`;

      let html2 = `<script id="container" name="content" type="text/plain">
        这里写你的初始化内容
      </script>`;

    return (
      <div className={`content-wrapper content-wrapper__style-page ${styles.contentWrapper}`}>
        <section className={styles.content}>
          <div className={styles.selector}>
            <SelectorTab />
            <SelectorFilter />
            <div>
              <ul className={styles.editorTemplateList}>
              {
                data.map((item, index) => {
                  return(
                    <li key={item.it} onClick={self.onTplItemClick}>
                      <div className="tpl" dangerouslySetInnerHTML={{__html: item.html}} />
                      <div className={styles.toolbar}>
                        <a href="javascript:;">收藏</a>
                        <a href="javascript:;">复制</a>
                      </div>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </div>
          <div className={styles.editor} dangerouslySetInnerHTML={{__html: html2}} />
        </section>
      </div>
    );
  }
}
