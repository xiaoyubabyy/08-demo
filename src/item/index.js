import React from 'react';
import marked from 'marked';
import axios from 'axios';
import Loading from '../component/loading'

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address = this.props.params.title;
    axios.get
  }
  render () {
    let content = this.props.params.title==0?'第一个':
                  this.props.params.title==1?'第二个':
                  this.props.params.title==2?'第三个':'第n个'
    return(
      <div>
      {content}
      </div>
    )
  }
}

export default Item;
