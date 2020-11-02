import React from 'react';
import './index.scss'
import Nav from '../nav/index'
import FooterBox from '../footer/index'
class ProjectBox extends React.Component {
  constructor() {
    super()
    this.state = {
      initList: [],
      listAll: [],
      list: [],
      current: 1,
      total: 0,
      typeList: [
        { code: 0, name: '全部' },
        { code: 1, name: '多媒体数字展厅' },
        { code: 2, name: '大型灯光秀' },
        { code: 3, name: '大型水幕秀' },
        { code: 4, name: '影视TV' },
        { code: 5, name: '建筑可视化漫游' },
        { code: 6, name: '三维产品动画' }
      ],
      btnActive: 0
    }
  }
  query() {
    try {
      ajax('/project/list', { current: this.state.current, pageSize: 8 }).then(res => {
        this.setState({
          initList: res.data.list.sort((a, b) => {
            return a.sort - b.sort
          }),

        })
        this.handleQuery()
      })
    } catch (error) {

    }
  }
  handleQuery() {
    if (this.state.btnActive) {
      this.setState({
        listAll: [...this.state.initList].filter(item => {
          return item.type == this.state.btnActive
        })
      })
    } else {
      this.setState({
        listAll: [...this.state.initList]
      })

    }
    this.setState({
      total: this.state.listAll.length,
      list: this.state.listAll.slice(0, this.state.current * 8)
    })

  }
  handleSelect(i) {
    this.setState({
      current: 1,
      btnActive: i
    })
    this.handleQuery()
  }
  handleAjax() {
    if (this.state.current * 8 < this.state.total) {
      let i = this.state.current + 1
      this.setState({
        current: i
      })
      this.handleQuery()
    }
  }
  render() {
    return (
      <div>
        <Nav active={4} />
        <div className="project">
          <h1 className="project-title">案例展示</h1>
          <div className="btn-list">
            {this.state.typeList.map((item, index) => {
              return (<div className={['btn-type', this.state.btnActive == index ? 'active' : ''].join(' ')} onClick={() => this.handleSelect(item.code)} key={item.name}>{item.name}</div>)
            })}
          </div>
          <div className='list'>
            {this.state.list.map((item, index) => {
              return (
                <a href={'/project-info?id=' + item.id} target="_blank" className='item' key={index}>
                  <img src={item.cover} />
                  <div className='shadow'>
                    <p>{item.name}</p>
                  </div>
                </a>
              )
            })}
          </div>
          <div className={['more', this.state.current * 8 >= this.state.total ? 'active' : ''].join(' ')} onClick={() => this.handleAjax()}>
            加载更多
          </div>
        </div>
        <FooterBox />
      </div >
    );
  }
  componentWillMount() {
    const i = window.location.search.replace(/[^0-9]/g, '')
    this.setState({
      btnActive: i
    })
    this.query()
  }
}

export default ProjectBox;
