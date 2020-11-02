import React from 'react';
import './index.scss'
import Nav from '../nav/index'
import FooterBox from '../footer/index'
class Client extends React.Component {
  constructor() {
    super()
    this.state = {
      job: [
        {
          link: 'icon-sirendingzhi', title: '职位', child: [
            '我们是由一群热爱生活、有梦想、',
            '有实力、敢拼搏有担当的热血青年组成的',
            '团队，一直在寻找志同道合的小伙伴，',
            '为我们的团队添助新的活力。'
          ]
        },
        {
          link: 'icon-jishuzhuanjia', title: '自由职业者', child: [
            '我们渴望能与热爱数字影像制作的小伙伴开',
            '展新的合作，一起探究学习，互相成就，',
            '在数字影像领域碰撞出新兴的花火。'
          ]
        },
        {
          link: 'icon-zhaozhuanjia', title: '实习生', child: [
            '只要你有才华、有梦想、有激情、',
            '肯实干、也勇于接受挑战。',
            '我们便能为你提供良好的技术指导',
            '以及广阔的创作平台。'
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Nav active={5} />
        <div className="join">
          <h1 className='join-title'>加入我们</h1>
          <div className='join-img'><img src="/images/join.jpg" /></div>
          <div className='join-info'>
            <p>如果你对视觉艺术有着自己独道的见解</p>
            <p>对内容创作有着孩童般无尽的奇思妙想，是热忠于数字影像的狂热分子</p>
            <p>并且有着捍卫自己梦想的决心和勇气</p>
            <p>欢迎加入我们</p>
            <p>这里有群与你志同道合的小伙伴</p>
            <p>可以提供任你鱼跃高飞、大施拳脚的广阔平台</p>
            <p>让我们一起学习成长，探索未来数字影像世界里的无尽奥秘。</p>
            <p>诚邀良才智士共谋大业。</p>
          </div>
          <div className='join-job'>
            <div className='join-job-list'>
              {this.state.job.map(item => {
                return (
                  <div className="join-job-item" key={item.title}>
                    <div className='join-job-item-icon'>
                      <span className={['iconfont', item.link].join(' ')} ></span>
                    </div>
                    <h3 className='join-job-item-title'>{item.title}</h3>
                    <div className='join-job-item-info'>
                      {item.child.map(i => {
                        return (<p key={i}>{i}</p>)
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="join-works">
            <div className="join-works-info">
              <p>长期招聘模型师、渲染师、特效师、合成师、VR设计师等。</p>
              <p>我们会提供许多有意义的学习机会，以确保员工成为有价值的团队成员。</p>
            </div>
          </div>
        </div>
        <FooterBox />
      </div >
    );
  }
}

export default Client;
