import React from 'react';
import './index.scss'
import Nav from '../nav/index'
import FooterBox from '../footer/index'
class ProjectBox extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      current: 1,
      total: 0
    }
  }
  query() {
    try {
      ajax('/news/list', { current: this.state.current, pageSize: 8 }).then(res => {
        this.setState({
          list: res.data.list.sort((a, b) => {
            return a.sort - b.sort
          }),
          total: res.data.total
        })
      })
    } catch (error) {

    }
  }
  handleAjax() {
    if (this.state.current * 8 < this.state.total) {
      this.setState({
        current: this.state.current + 1
      })
      this.query()
    }
  }
  render() {
    return (
      <div>
        <Nav active={4} />
        <div className="news">
          <h1 className="news-title">新闻动态</h1>
          <div className='list'>
            {this.state.list.map(item => {
              return (
                <a href={'/news-info?id=' + item.id} target="_blank" className='item' key={item.id}>
                  <div className='item-img'>
                    <img src={item.cover} alt="" />
                    <div className='shadow'>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div className='item-info'>
                    <div className='item-text'>
                      <h1>{item.name}</h1>
                      <span className='item-info-time'>{item.createtime.replace(/[T].+/g, '')}</span>
                    </div>
                    <div className='item-btn-box'>
                      <div className='item-btn'>
                        <i className='iconfont icon-right1'></i>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
          <div className={['more', this.state.current * 8 >= this.state.total ? 'active' : ''].join(' ')} onClick={this.handleAjax.bind(this)}>
            加载更多
          </div>
        </div>
        <FooterBox />
      </div >
    );
  }
  componentWillMount() {
    this.query()
  }
}

export default ProjectBox;
