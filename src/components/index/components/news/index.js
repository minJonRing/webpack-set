import React from 'react';
import './index.scss'

class NewsBox extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <div className='news-box'>
        <div className='news-list'>
          {this.state.list.map((item, index) => {
            return (
              <div className='news-item' key={index}>
                <a className='item-box' href={'/news-info?id=' + item.id}>
                  <img src={item.cover} alt={item.name} />
                  <div className='item-shade'>
                    <div className='item-shade-position'>
                      <h3 className='item-title'>{item.name + '《互联网周刊》专访BITONE CEO 叶青：限...'}</h3>
                      <span className='item-time'>{item.createtime.replace(/[T].+/g, '')}</span>
                    </div>
                  </div>
                  <div className='item-icon'>
                    <i className='iconfont icon-right'></i>
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
      ajax('/news/all').then(res => {
        const arr = res.data.sort((a, b) => {
          return a.sort - b.sort
        }).splice(0, 3)
        this.setState({
          list: arr
        })
      })
    } catch (error) {

    }
  }
}

export default NewsBox;
