import React from 'react';
import './index.scss'

class HistoryBox extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [{
        title: '2015',
        en: 'TWO THOUSAND AND FIFTEEN',
        info: 'SINQ正式成立'
      }, {
        title: '60',
        en: 'SIXTY',
        info: '为超过60个品牌提供数字影像服务， 是众多数字展厅、大型灯光秀、水幕秀、产品、企业宣传片、建筑漫游可视化、影视宣传片等内容制作供应商'
      }, {
        title: '200',
        en: 'TWO HUNDRED',
        info: '提供超过200个数字影像内容制 作解决方案'
      }, {
        img: '/images/logo-history.png',
        en: 'DIGITAL IMAGE',
        info: '数字创想，影领未来'
      }]
    }
  }

  render() {
    return (
      <a className='history-box' href="/">
        {this.state.list.map((item, index) => {
          return (
            <div className="item" key={index}>
              {[1, 2, 3, 4].map(item => {
                return (<div className={['item-border', 'item-border-' + item].join(' ')} key={item}></div>)
              })}
              <h3 className="title">{item.img ? <img src={item.img} /> : item.title}</h3>
              <span className="en">{item.en}</span>
              <p className="info">{item.info}</p>
              <span className="link" href="about.html">VIEW MORE</span>
            </div>
          )
        })}
      </a>
    )
  }
}

export default HistoryBox;
