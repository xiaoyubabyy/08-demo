import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
class Loading extends React.Component {
  render () {
    return(
      <div style={{textAlign:'center'}}>
      <CircularProgress color=" #E1BEE7"/>
      </div>
    )
  }
}

export default Loading;
