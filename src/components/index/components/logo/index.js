import React from 'react';
import './index.scss'
class LogoBox extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      len: 0,
      active: 0,
      w: 0
    }
  }
  componentWillMount() {
    try {
      ajax('/logo/all').then(res => {
        const len = res.data.length
        this.setState({
          list: res.data.sort((a, b) => {
            return a.sort - b.sort
          }),
          len: (len - 5) > 0 ? len : 0
        })
      })
    } catch (error) {

    }
  }
  renderList(data) {
    const arr = [...data, ...data]
    return arr.map((item, index) => {
      return (
        <div className='logo-item' key={index}>
          <img src={item.link} alt={item.name} />
        </div>
      )
    })
  }
  handleSlide(direction) {
    let ind = this.state.active
    const len = this.state.len
    if (direction === 'left') {
      if (ind === 0) {
        return
      }
      this.setState({
        active: --ind
      })
    } else {
      if (ind === len) {
        return
      }
      this.setState({
        active: ++ind
      })
    }
  }
  render() {
    return (
      <div className='logo-box'>
        <h2 className="logo-client">我们的客户</h2>
        <div className='logo-list' ref={(ref) => { this.list1 = ref }}>
          <div className={['btn btn-prev', this.state.active === 0 ? 'active' : ''].join(' ')} onClick={() => this.handleSlide('left')}></div>
          <div className="logos">
            <div className="logo-slide" style={{ transform: 'translateX(-' + this.state.active * 16 + 'vw)' }}>
              {this.renderList(this.state.list)}
            </div>
          </div>
          <div className={['btn btn-next', this.state.active === this.state.len ? 'active' : ''].join(' ')} onClick={() => this.handleSlide('right')}></div>
        </div>
        <div className="logo-link">
          <a className="logo-btn" href="/client">VIEW MORE</a>
        </div>
      </div>
    )
  }
  anime() {

  }
}

export default LogoBox;
