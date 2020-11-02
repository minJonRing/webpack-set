import React from 'react';
import './index.scss'

class TypeBox extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [
        { link: "icon-banshidating", name: '多媒体数字展厅' },
        { link: "icon-logo", name: '大型水幕秀' },
        { link: "icon--", name: '大型灯光秀' },
        { link: "icon-yingban", name: '影视宣传片' },
        { link: "icon-shengchan", name: '三维产品动画' },
        { link: "icon-shujujianmo", name: '建筑可视化漫游' }
      ]
    }
  }
  render() {
    return (
      <div className='type-box'>
        <h2 className="type-title">核心产品与服务</h2>
        <span className="type-bar"></span>
        <div className='type-list'>
          {this.state.list.map(item => {
            return (
              <div className='type-item' key={item.link}>
                <div className='type-icon'>
                  <i className={['iconfont ', item.link].join(' ')}></i>
                </div>
                <div className='type-item-text'>{item.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log(this.props)
  }
}

export default TypeBox;
