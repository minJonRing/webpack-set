import React from 'react';
import './index.scss'
// info
import Info from './info/index'
import ImgBox from './imgs/index'
class CultureBox extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="culture">
        <Info />
        <ImgBox />
      </div>
    )
  }
}

export default CultureBox;
