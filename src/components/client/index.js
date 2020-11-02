import React from 'react';
import './index.scss'
import Nav from '../nav/index'
import FooterBox from '../footer/index'
class Client extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <div>
        <Nav active={4} />
        <div className="client">
          <img className="bg" src="/images/client.jpg" />
          <div className="client-text">
            <h1 className="client-text-title">我们的客户</h1>
            <div className="client-text-info">
              <span>思影奇服务业态覆盖面广，目前已服务超过60家公司，提供了超200个优秀解决方案。</span>
              <span>其中包括国内外知名企业、政府部门、地产开发商、科创公司等。</span>
            </div>
          </div>
          <div className="client-list">
            {this.state.list.map(item => {
              return (<div className="client-item" key={item.id}>
                <img src={item.link} alt={item.name} />
              </div>)
            })}
          </div>
        </div>
        <FooterBox />
      </div >
    );
  }
  componentWillMount() {
    try {
      ajax('/logo/all').then(res => {
        this.setState({
          list: res.data.sort((a, b) => {
            return a.sort - b.sort
          })
        })
      })
    } catch (error) {

    }
  }
}

export default Client;
