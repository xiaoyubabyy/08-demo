import React from 'react';
import {Link} from 'react-router'
class LeftNav extends React.Component {
  render () {
    return(
      <div className='leftnav-wrap'>
        <h3>Xiaoyu@{this.props.title}</h3>
        <Link to='/'>Home</Link>
        <Link to='blog'>Blog</Link>
        <Link to='work'>Work</Link>
        <Link to='about'>About</Link>
      </div>
    )
  }
}

export default LeftNav;
