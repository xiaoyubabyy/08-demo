import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'
class BlogCard extends React.Component {
  render () {
    return(
      <div className='blog-card'>
        <div className='blog-index '><span>{this.props.index}</span></div>
        <div className='blog-content clearfix' >
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          <RaisedButton label="阅读更多"  href={`#/item/${this.props.url}`}/>
        </div>

      </div>
    )
  }
}
BlogCard.defaultProps={
  index:1,
  title:'我是默认标题',
  desc:'我是默认介绍'
}
BlogCard.propTypes={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  desc:React.PropTypes.string
}
export default BlogCard;
