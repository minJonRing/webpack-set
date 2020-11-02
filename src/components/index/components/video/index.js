import React from 'react';
import './index.scss'

class VideoBox extends React.Component {
  constructor() {
    super()
    this.state = {
      bool: false,
      video: ''
    }
  }
  componentWillMount() {
    try {
      ajax('/set/home/video').then(res => {
        this.setState({
          video: res.data[0].link
        })
      })
    } catch (error) {

    }
  }
  handleBool() {
    const bool = this.state.bool
    this.setState({
      bool: !bool
    })
    if (!bool) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  render() {
    return (
      <div className='video-box'>
        <video src={this.state.video} autoPlay muted loop></video>
        <div className="video-box-info">
          <h1 className="title" title="2020 SHOWREEL">2020 SHOWREEL</h1>
          <p className="text">SINQ恪守“极致创新”的服务理念，沿用数字CG、影视特效、3D全息投影、VR虚拟互动等多种创新科技，打造非凡的艺术视觉体验。</p>
          <a className="btn" onClick={this.handleBool.bind(this)}>PIAY VIDEO
            <span className="s1"></span>
            <span className="s2"></span>
            <span className="s3"></span>
            <span className="s4"></span>
          </a>
        </div>
        <div className={['video-shade', this.state.bool ? 'active' : ''].join(' ')} onClick={this.handleBool.bind(this)}>
          <video ref={el => { this.video = el }} src={this.state.video} controls loop></video>
        </div>
      </div>
    )
  }
}

export default VideoBox;
