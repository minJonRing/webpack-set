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
            { name: '多媒体数字展厅', link: '/project?type=1' },
            { name: '大型水幕秀', link: '/project?type=2' },
            { name: '大型灯光秀', link: '/project?type=3' },
            { name: '影视宣传片', link: '/project?type=4' },
            { name: '三维产品动画', link: '/project?type=5' },
            { name: '建筑可视化漫游', link: '/project?type=6' }
          ]
        },
        { name: '案例展示', link: '/project' },
        { name: '新闻动态', link: '/news' },
        {
          name: '关于思影奇', child: [
            { name: '公司介绍', link: '/company?type=0' },
            { name: '企业文化', link: '/company?type=1' }
          ]
        },
        { name: '我们的客户', link: '/client' },
        { name: '加入我们', link: '/join' },
        { name: '联系我们', link: '/contact' }
      ],
      logo: '/images/logo.png'
    }
  }
  handleShow() {
    let top = 0
    window.onscroll = (e) => {
      top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 600) {
        this.setState({
          bool: true
        })
      } else {
        this.setState({
          bool: false
        })
      }
    }
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
          <div className={['item', 'item-' + index, this.props.active === index ? 'active' : ''].join(' ')} key={item.name}>
            <div className="item-name">{item.name}</div>
            <div className="item-child-list">
              {item.child.map((i, j) => {
                return (
                  <a className={['item-child-item', 'delay' + j].join(' ')} href={i.link} key={i.name}>{i.name}</a>
                )
              })}
            </div>
          </div>
        )
      } else {
        return (
          <div className={['item', this.props.active === index ? 'active' : ''].join(' ')} key={index}>
            <a className="item-name" href={item.link}>{item.name}</a>
          </div>
        )
      }
    })
  }
  render() {
    return (
      <div className={['nav', this.props.active !== 0 || this.state.bool ? 'active' : ''].join(' ')}>
        <div className="nav-box">
          <a className="logo" href='/'>
            <img src={this.state.logo} alt="logo" />
          </a>
          <div className='list'>
            {this.renderMenu()}
          </div>
        </div>
      </div >
    )
  }
  componentDidMount() {
    this.handleShow()
  }
}

export default Nav;
