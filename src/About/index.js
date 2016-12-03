import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import Loading from '../component/loading';
import ShowGit from '../component/ShowGit';
class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    let value = this.refs.gitname.getValue();
    axios.get(`https://api.github.com/users/${value}`)
      .then( res => this.setState({data:res.data,wait:2}))
      .catch( error => {alert(error);this.setState({wait:0}) })
    this.refs.form.reset();
  }


  render () {
    let styles={
      underline:{
        borderColor:'#00bcd4'
      }
    }
    let showGitinfo = this.state.wait==0 ? null:
    this.state.wait== 1 ? <Loading /> : <ShowGit gitInfo={this.state.data}/>
    return(
      <div className='about-wrap'>
        <div className='git-card'>
        <h4>如果我爱上你的笑容<br/>
        要怎么收藏
        要怎么拥有</h4>
        <form className='about-form' onSubmit={this.handleSubmit.bind(this)} ref='form'>
        <TextField ref='gitname' hintText="Hint Text" underlineFocusStyle={{borderColor:'pink'}}/>
        <FlatButton onClick={this.handleSubmit.bind(this)} label="search" secondary={true} />
        </form>
        {showGitinfo}
        </div>

      </div>
    )
  }
}

export default About;
