import React, { Component } from "react";

class InputList extends Component {
  style = {
    border: "1px solid",
    marginBottom: "1rem",
    width: "300px"
  };

  handleData = () => {
    const { userList } = this.props;

    return userList.map(user => {
      const { name, email, comment, likeDislike } = user.userState;

      return (
        <div key={user.id} style={this.style}>
          <div>name: {name}</div>
          <div>email: {email}</div>
          <div>comment: {comment}</div>
          <div>{likeDislike}</div>
        </div>
      );
    });
  };

  render() {
    //console.log(this.props.userList);
    return <div>{this.handleData()}</div>;
  }
}

export default InputList;
