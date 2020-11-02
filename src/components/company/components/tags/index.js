import React from 'react';
import './index.scss'

class InitBox extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='init-box'>
        <img src="" />
        <h1 className="init-title">关于SINQ</h1>
        <div className="init-info">
          <p>杭州思影奇数字科技有限公司(简称:SinQ)，未来数字影像服务供应商。</p>
          <p>以数字影像制作为载体，品牌服务为核心，通过艺术创想打造非凡的视觉体验。</p>
        </div>
        <div className="switch-nav">
          <div className="clear">
            <div className={['btn', this.props.active === 0 ? 'active' : ''].join(' ')} onClick={() => { this.props.switch(0) }}>公司介绍</div>
            <div className={['btn', this.props.active === 1 ? 'active' : ''].join(' ')} onClick={() => { this.props.switch(1) }}>企业文化</div>
          </div>
        </div>
      </div>
    )
  }
}

export default InitBox;
