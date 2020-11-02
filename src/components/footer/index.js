import React from 'react';
import './index.scss'

class FooterBox extends React.Component {
  constructor() {
    super()
    this.state = {
      img: ''
    }
  }
  render() {
    return (
      <div className='footer-box'>
        <h2 className='footer-title'>联系我们</h2>
        <div className='footer-cont'>
          <div className='footer-left'>
            {/* <h3>24H服务咨询热线：400-180-1815</h3>
            <h3>24H服务咨询热线：400-180-1815</h3> */}
            <p>地址：杭州市西湖区古墩路616号同人精华大厦2座6L</p>
            <p>座机：0571-86920663</p>
            <p>商务手机：15058126502</p>
            <p>邮箱：hzsyq@foxmail.com</p>
          </div>
          <div className='footer-mid'>
            <p>杭州思影奇数字科技有限公司</p>
            <span></span>
            {/* <div>
              <a href="javascript:">
                <img src="/images/web/pic-1.png" alt="" />
              </a>
              <a href="javascript:">
                <img src="/images/web/pic-2.png" alt="" />
              </a>
              <a href="javascript:">
                <img src="/images/web/pic-3.png" alt="" />
              </a>
              <a href="javascript:">
                <img src="/images/web/pic-4.png" alt="" />
              </a>
              <a href="javascript:">
                <img src="/images/web/pic-5.png" alt="" />
              </a>
            </div> */}
          </div>
          <div className='footer-right'>
            <h3>友情链接</h3>
            <a className="link-img" href='/'>
              <img src="/images/wx.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterBox;
