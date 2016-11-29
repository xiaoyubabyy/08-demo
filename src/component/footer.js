import React from 'react';
import {Link} from 'react-router'
class Footer extends React.Component {
  render () {
    return(
      <div className='footer'>
      <Link to='/' activeStyle={{color:'#fff'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br />Home</Link>
      <Link to='Blog' activeStyle={{color:'#fff'}}><span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span><br />Blog</Link>
      <Link to='Work' activeStyle={{color:'#fff'}}><span className="glyphicon glyphicon-registration-mark" aria-hidden="true"></span><br />Work</Link>
      <Link to='About' activeStyle={{color:'#fff'}}><span className="glyphicon glyphicon-xbt" aria-hidden="true"></span><br />About</Link>
      </div>
    )
  }
}

export default Footer;
