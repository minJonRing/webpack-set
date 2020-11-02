import React from 'react';
import './index.scss'
// info
import Info from './info/index'
import Type from './type/index'
class CompanyBox extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Info />
        <Type />
        <div className='history-img'>
          <img src="/images/company/history.png" />
        </div>
      </div>
    )
  }
}

export default CompanyBox;
