import React from 'react';
import './index.scss'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      bool: false,
      active: 0,
      list: [
        {
          name: '服务业态', child: [
            { name: '多媒体数字展厅', link: '/' },
            { name: '大型灯光秀', link: '/' },
            { name: '大型水幕秀', link: '/' },
            { name: '影视TV', link: '/' },
            { name: '建筑可视化漫游', link: '/' },
            { name: '三位产品动画', link: '/' }
          ]
        },
        { name: '案例展示', link: '/' },
        { name: '新闻动态', link: '/' },
        {
          name: '关于思影奇', child: [
            { name: '公司介绍', link: '/' },
            { name: '企业文化', link: '/' }
          ]
        },
        { name: '我的客户', link: '/' },
        { name: '加入我们', link: '/' },
        { name: '联系我们', link: '/' }
      ]
    }
  }
  handleBool() {
    const bool = this.state.bool
    this.setState({
      bool: !bool
    })

  }
  handleActive(i) {
    this.setState({
      active: i
    })
  }
  renderMenu() {
    return this.state.list.map((item, index) => {
      if (item.child) {
        return (
          <div className={['item', 'item-' + index, this.state.active === index ? 'active' : ''].join(' ')} key={index}>
            <div className="item-name">{item.name}</div>
            <div className="item-child-list">
              {item.child.map((i, j) => {
                return (
                  <a className={['item-child-item', 'delay' + j].join(' ')} href={i.link} key={j}>{i.name}</a>
                )
              })}
            </div>
          </div>
        )
      } else {
        return (
          <div className={['item', this.state.active === index ? 'active' : ''].join(' ')} key={index}>
            <a className="item-name" href={item.link}>{item.name}</a>
          </div>
        )
      }
    })
  }
  render() {
    return (
      <div className={['nav', this.state.bool ? 'active' : ''].join(' ')}>
        < div className="btn nav-switch" onClick={() => this.handleBool()}>
          <span className='item item1'></span>
          <span className='item item2'></span>
          <span className='item item3'></span>
        </div>
        <div className='list'>
          {this.renderMenu()}
        </div>
      </div >
    )
  }
}

export default Nav;
