import React from 'react';
import './index.scss'
import Nav from '../nav/index'
import FooterBox from '../footer/index'

class ClientBox extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      city: '',
      compant: '',
      isReply: false,
      message: '',

    }
  }
  handelChange(n, e) {
    this.setState({
      [n]: e.target.value
    })
  }
  handleClick(i) {
    this.setState({
      isReply: !!i
    })
  }
  handleSubmit() {
    try {
      ajax('/email/add', {
        body: JSON.stringify(this.state),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      }).then(res => {
        alert('提交成功')
      })
    } catch (error) {

    }
  }
  render() {
    return (
      <div>
        <Nav active={6} />
        <div className='contact'>
          <h1 className="title">联系我们</h1>
          <div className="imgs">
            <img src="/images/contact.jpg" />
            {/* <img src="/images/contact/2.jpeg" /> */}
          </div>
          <div style={{ width: '60%', margin: '0 auto', padding: '' }}>
            <div className="address">
              <h1>杭州 (总部)</h1>
              <span>杭州市西湖区</span>
              <div className='bar'></div>
              <div className="phone"><label>电话：</label>  0571—86920663</div>
              <a className="email" href="mailto:info@bitone.com" ><label>邮箱：</label>  hzsyq@foxmail.com</a>
            </div>
            <div className="touch">
              <h1 className='touch-title'>联系您的信息</h1>
              <div className='touch-text'>欢迎来到思影奇。如果您想了解我们的产品和服务，或对我们有任何疑问，请随时通过电话、邮箱或站内消息与我们联系。期待您的来信！
          我们会在1-2个工作日内回复您的邮件（星期一 ~ 星期五，上午9:00 - 下午5:30.）。</div>
              <div className='touch-info'>请填写以下表格。 带 * 必填 ，后面选填就行（越详细越好）   希望能为您提供技术支持和服务！  </div>
            </div>
            <div className='send-email'>
              <div className='left'>
                <input type='text' onChange={this.handelChange.bind(this, 'name')} defaultValue={this.state.name} placeholder='*姓名' />
                <input type='text' onChange={this.handelChange.bind(this, 'email')} defaultValue={this.state.email} placeholder='*邮箱' />
                <input type='text' onChange={this.handelChange.bind(this, 'phone')} defaultValue={this.state.phone} placeholder='*电话号码 (如果您在中国以外地区，请在前面加上国家代码)' />
                <input type='text' onChange={this.handelChange.bind(this, 'city')} defaultValue={this.state.city} placeholder='*所在城市' />
                <input type='text' onChange={this.handelChange.bind(this, 'company')} defaultValue={this.state.company} placeholder='*公司' />
                <div className='sub'>
                  <div className='sub-info'>是否订阅我们的新闻邮件？</div>
                  <div className='sub-btn'>
                    <div className="lab">
                      <span className={[this.state.isReply ? 'active' : ''].join(' ')} onClick={this.handleClick.bind(this, 1)}></span>
                      <i>是</i>
                    </div>
                    <div className="lab">
                      <span className={[!this.state.isReply ? 'active' : ''].join(' ')} onClick={this.handleClick.bind(this, 0)}></span>
                      <i>否</i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='right'>
                <textarea onChange={this.handelChange.bind(this, 'message')} defaultValue={this.state.message} placeholder='您的信息' />
              </div>
            </div>
            <div className='submit' onClick={this.handleSubmit.bind(this)}>提 交 </div>
          </div>
        </div>
        <FooterBox />
      </div >
    )
  }
}

export default ClientBox;
