import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
class Loading extends React.Component {
  render () {
    return(
      <div>
      <CircularProgress color=" #E1BEE7"/>
      </div>
    )
  }
}

export default Loading;
