import React from 'react';
import NavHeader from './component/NavHeader'
import Footer from './component/footer'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class App extends React.Component {
  constructor(){
    super();
    this.state={title:'Home'}
  }
  getChildContext(){
    return {muiTheme:getMuiTheme()};
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  componentWillMount(){
    this.setTitle()
  }
  setTitle(){
    this.setState({
    title:this.props.router.isActive('/',true)?'Home':
          this.props.router.isActive('/blog')?'Blog':
          this.props.router.isActive('/work')?'Work':
          this.props.router.isActive('/about')?'About':'Blog'
  })
}
  render () {
    return(
      <div className='my-wrap'>
        <NavHeader title={this.state.title}/>
        <div className='main'>
        {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;
