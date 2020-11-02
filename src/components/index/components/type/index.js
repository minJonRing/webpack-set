import React from 'react';
import './index.scss'

class TypeBox extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  componentWillMount() {
    try {
      ajax('/set/home/type').then(res => {
        const { link1, link2, link3, link4, link5, link6 } = res.data[0]
        const arr = [
          { name: '多媒体数字展厅', link: link1 },
          { name: '大型水幕秀', link: link3 },
          { name: '大型灯光秀', link: link2 },
          { name: '影视宣传片', link: link4 },
          { name: '三维产品动画', link: link6 },
          { name: '建筑可视化漫游', link: link5 }
        ]
        this.setState({
          list: arr
        })
      })
    } catch (error) {

    }
  }
  render() {
    return (
      <div className='type-box'>
        {this.state.list.map((item, index) => {
          return (
            <div className='type-box-cont' key={index}>
              <img className='type-bg' src={item.link} alt="" />
              <div className='type-shade'>
                <div className='type-shade-icon'>
                  <i className='iconfont icon-chain'></i>
                </div>
                <p className="type-shade-text">{item.name}</p>
                <span className='type-shade-bar'></span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TypeBox;
