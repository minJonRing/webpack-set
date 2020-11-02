import React from 'react';
import './index.scss'

class InitBox extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='init-box'>
        <div className='init-box-cont'>
          <div className='img-box'>
            <img src="/images/logo-init.jpg" alt='logo' />
          </div>
          <div className='text-box'>
            <p>思影奇未来数字影像服务供应商</p>
            <p>以数字影像制作为载体，品牌服务为核心，通过艺术创想打造非凡的视觉体验，激发数字的巨大潜能。</p>
            <p>为生活的鲜艳上色，为社会的发展赋能，让创想打破空间屏障，荧屏舞动生活、光影照亮未来。</p>
          </div>
        </div>
      </div>
    )
  }
}

export default InitBox;
