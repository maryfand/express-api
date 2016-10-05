import React,{PropTypes} from 'react'

class ShowPost extends React.Component {
  render() {
    return(
      <div>
      {this.props.params.id}
      </div>
    )
  }
}

export default ShowPost;
