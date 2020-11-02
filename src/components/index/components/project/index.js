import React from 'react';
import './index.scss'

class ProjectBox extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      typeJson: {
        '1': '展厅',
        '3': '水幕秀',
        '2': '光影秀',
        '4': '影视',
        '6': '三维',
        '5': '建筑漫游',
      }
    }
  }
  setElHeight() {
    if (!this.state.list.length) {
      return
    }
    const h = this.item0.clientHeight
    if (!h) {
      setTimeout(() => {
        this.setElHeight()
      }, 30);

      return
    }
    this.item3.style.height = this.item4.style.height = 2 * h + 'px'
    this.item6.style.height = h + 'px'
  }
  render() {
    return (
      <div className='project-box'>
        <div className='project-title'>
          <h2>案例展示</h2>
        </div>
        <div className='project-list'>
          {this.state.list.map((item, index) => {
            return (
              <div ref={el => this['item' + index] = el} className={['project-item', 'project-item-' + index].join(' ')} key={index}>
                <a className='item-box' href={'/project-info?id=' + item.id}>
                  <img src={item.cover} alt={item.name} />
                  <div className='item-shade'>
                    <div className='item-shade-position'>
                      <span className='item-type'>{this.state.typeJson[item.type]}</span>
                      <div className='item-icon'><i className='iconfont icon-play--outline--filled'></i></div>
                      <h3 className='item-title'>{item.name}</h3>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  componentWillMount() {
    try {
      ajax('/project/all').then(res => {
        const arr = res.data.sort((a, b) => {
          return a.sort - b.sort
        }).splice(0, 7)
        this.setState({
          list: arr
        })
      })
    } catch (error) {

    }
    window.onresize = () => {
      this.setElHeight()
    }
  }
  componentDidUpdate() {
    this.setElHeight()
  }
}

export default ProjectBox;
