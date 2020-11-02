import React from 'react';
import './index.scss'
import Nav from '../nav/index'
import FooterBox from '../footer/index'
class ProjectItemBox extends React.Component {
  constructor() {
    super()
    this.state = {
      detail: {
        createtime: ''
      },
      video: []
    }
  }
  query() {
    try {
      const id = window.location.search.replace(/.+(!?\=)/g, '')
      ajax('/project/detail?id=' + id).then(res => {
        if (res.data) {
          this.setState({
            detail: res.data,
            video: res.data.video ? res.data.video.split(',') : ''
          })
        }
      })
    } catch (error) {

    }
  }
  render() {
    return (
      <div>
        <Nav active={4} />
        <div className="project-item">
          {this.state.video ? <div className='video-list'>
            {this.state.video.map(item => {
              return (
                <div className="video-item" key={item} dangerouslySetInnerHTML={{ __html: this.state.detail.isOutVideo ? item : `<video controls src="${item}"></video>` }}>
                </div>
              )
            })}
          </div> : ''}
          <div className="project-info">
            <h1>{this.state.detail.name}</h1>
            <div className='time'>{this.state.detail.createtime.replace(/[T].+/g, '')}</div>
          </div>
          <div className='cont' dangerouslySetInnerHTML={{ __html: this.state.detail.content }}></div>
        </div>
        <FooterBox />
      </div >
    );
  }
  componentWillMount() {
    this.query()
  }
}

export default ProjectItemBox;
