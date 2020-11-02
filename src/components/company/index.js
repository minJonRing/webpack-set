import React from 'react';
import './index.scss'
import Nav from '../nav/index'
import FooterBox from '../footer/index'
// info
import Init from './components/tags/index'
import CompanyBox from './components/company/index'
import CultureBox from './components/culture/index'
function Index() {
  return (
    <div className="company">
      <Company />
    </div >
  );
}

class Company extends React.Component {
  constructor() {
    super()
    this.state = {
      active: 1
    }
    this.handleSwitch = this.handleSwitch.bind(this)
  }
  handleSwitch(i) {
    this.setState({
      active: i
    })
  }
  render() {
    return (
      <div>
        <Nav active={3} />
        <img src='/images/company.jpg' style={{ display: 'block', width: '100%' }} />
        <div className='cont'>
          <Init active={this.state.active} switch={this.handleSwitch} />
        </div>
        <div className={['company-info', !this.state.active ? 'active' : ''].join(' ')}>
          <CompanyBox />
        </div>
        <div className={['company-culture', this.state.active ? 'active' : ''].join(' ')}>
          <CultureBox />
        </div>
        <div></div>
        <FooterBox />
      </div >
    )
  }
  componentWillMount() {
    const i = window.location.search.replace(/[^0-9]/g, '')
    this.setState({
      active: i - 0
    })
  }
}

export default Index;
