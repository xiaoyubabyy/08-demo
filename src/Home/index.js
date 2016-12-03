import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div className='home-wrap'>
        <div className='home-hover'>
        <div className='home-item'>
          <h3>HI, I AM XiaoYu</h3>
          <p>生命中最善良的时光<br/>就像是水一样明亮</p>
          <button type="button" className="btn btn-default" aria-label="Left Align">
            鱼比比
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
