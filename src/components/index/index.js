import React from 'react';
import './index.scss'
import Nav from '../nav/index'
import VideoBox from './components/video/index'
import InitBox from './components/init/index'
import TypeBox from './components/type/index'
import HistoryBox from './components/history/index'
import NewsBox from './components/news/index'
import ProjectBox from './components/project/index'
import LogoBox from './components/logo/index'
import FooterBox from '../footer/index'
function Index() {
  return (
    <div className="index">
      <Nav active={0} />
      {/* <VideoBox /> */}
      <div className='scroll'>
        {/* <div style={{ height: '100vh' }}></div> */}
        <VideoBox />
        <InitBox />
        <TypeBox />
        <HistoryBox />
        <NewsBox />
        <ProjectBox />
        <LogoBox />
      </div>
      <FooterBox />
    </div >
  );
}

export default Index;
