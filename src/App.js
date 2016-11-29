import React from 'react';
import NavHeader from './component/NavHeader'
import Footer from './component/footer'
class App extends React.Component {
  render () {
    return(
      <div className='my-wrap'>
        <NavHeader />
        <div className='main'>
        {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
