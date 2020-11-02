import React from 'react';
import './index.scss'

class InfoBox extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='info-box culture-info-box'>
        <h1 className='info-title'>企业文化</h1>
        <div className='info-text-1'>
          <p> 我们一直恪守着“极致创想，凌驾于一切之上”发展的理念，</p>
          <p> 对外是不辜负任何一份客户的信任，于内是对公司发展负责，</p>
          <p> 这也是一家未来数字影像公司该持有的行业态度。 </p>
        </div>
        <div className="culture-img-home">
          <img src="/images/company/index.jpeg" />
        </div>
        <div className='info-text-2'>
          <p> “天下大事必做于细”，极致，是企业必不可少的<b>服务准则</b>。 </p>
          <p> 而对于一家科创型数字影像公司而言，在提供<b>极致服务</b>的基准上，同时还肩负着不断创新的使命。 </p>
          <p> 于是乎，我们从不以资深、专业来标榜自己，永远都怀抱着初学者的心态，不断的探思<b>学习</b>、深研<b>创新</b>。 </p>
        </div>
        {/* <div className="culture-img-sub">
          <div className='culture-top'>
            <div className="img-1"><img src="/images/company/12.jpg" /></div>
            <div className="img-2"><img src="/images/company/13.jpg" /></div>
          </div>
          <div className='culture-bottom'>
            <div className="img-3"><img src="/images/company/14.jpg" /></div>
            <div className="img-3"><img src=" /images/company/15.jpg" /></div>
            <div className="img-3"><img src="/images/company/12.jpg" /></div>
          </div>
        </div> */}
        <div className='info-text-2'>
          <p> 作为创新力的驱动者，我们是一群对行业有着自己独道见解“小影同学”， </p>
          <p> <b>天马行空</b>的想象、年轻热血的干劲、不拘于行的工作态度、以及对数字影像高度热枕， </p>
          <p> 这些看似简单的组合，却都是能促成一个优秀创意案例的产生不可或缺的关键。 </p>
          <p>  “一朵鲜花打扮不出美丽的春天”，所以无论你是合作老友、行业同行者、亦或是热爱数字影像的“问路人”， </p>
          <p>  <b>思影奇都愿与你一起探究、共同进步，为数字影像的美丽图腾献力。</b> </p>
        </div>
        <div style={{ paddingTop: '3%' }}></div>
      </div >
    )
  }
}

export default InfoBox;
