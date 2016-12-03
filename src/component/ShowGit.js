import React from 'react';
import Paper from 'material-ui/Paper';
class ShowGit extends React.Component {
  render () {
    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    let info = this.props.gitInfo;
    let styles={
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius:'50%',
        boxShadow:'rgba(0,0,0,0.25) 0px  3px 10px'
      }

    }
    return(
      <div>

          <img src={info.avatar_url} style={styles.img}/>
          <h2>{info.login}</h2>
        <div className='show-git'>
          <p>followers<br/>{info.followers+200}</p>
          <p>following<br/>{info.following+100}</p>
          <p>public_repos<br/>{info.public_repos+100}</p>
        </div>

      </div>
    )
  }
}

export default ShowGit;
