import React from 'react';
import './index.scss'

class InfoBox extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='info-box'>
        <h1 className='info-title'>公司介绍</h1>
        <div className='info-text-1'>
          <p> 杭州思影奇数字科技有限公司(简称:SinQ)，未来数字影像服务供应商。 </p>
          <p> 以数字影像制作为载体，品牌服务为核心，通过艺术创想打造非凡的视觉体验。 </p>
          <p> 我们擅长将数字成像、数字cg、影视特效、三维动画、3D全息投影、VR虚拟现实等技术，运用到多媒体数字展厅、大型水幕秀、光影秀、 </p>
          <p> 影视宣传片、建筑可视化漫游、三维产品动画的商业领域，激发出数字影像的巨大潜能，为生活的鲜艳上色，为社会的发展赋能。 </p>
          <p> 让创想打破空间屏障，荧屏舞动生活，光影照亮未来。 </p>
          <p> ”数字创想、影领未来“ </p>
          <p style={{ height: '23px' }}></p>
          <p>多年来通过在行业中不断的研展与深耕，我们这支热爱数字影像科创的队伍一直在日益壮大，为政府、地产开发商、世界500强等国内外 </p>
          <p> 超过60家知名企业提供服务，提供了超200个数字影像内容制作的解决方案。 </p>
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props)
  }
}

export default InfoBox;
