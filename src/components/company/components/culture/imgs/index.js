import React from 'react';
import './index.scss'

class InfoBox extends React.Component {
  constructor() {
    super()
    this.state = {
      list: new Array(16).fill('.jpg')
    }
  }
  render() {
    return (
      <div className='culture-img'>
        {this.state.list.map((item, index) => {
          return (
            <div className="culture-item" key={index}>
              <img src={'/images/company/' + (index - 0 + 1) + item} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default InfoBox;
