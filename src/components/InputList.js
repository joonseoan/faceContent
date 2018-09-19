import React, { Component } from "react";

import DeleteUsers from "components/DeleteUsers";
import UpdateUsers from "components/UpdateUsers";

class InputList extends Component {
  style = {
    border: "1px solid",
    marginBottom: "1rem",
    width: "300px"
  };

  handleData = () => {
    const { userList, toDelete, toUpdate } = this.props;

    console.log(this.props);

    return userList.map(user => {
      const { name, email, comment, likeDislike } = user;

      return (
        <div key={user.id} style={this.style}>
          <div>name: {name}</div>
          <div>email: {email}</div>
          <div>comment: {comment}</div>
          <div>{likeDislike}</div>
          <DeleteUsers onDelete={toDelete} user={user} />
          <UpdateUsers onUpdate={toUpdate} user={user} />
        </div>
      );
    });
  };

  render() {
    return <div>{this.handleData()}</div>;
  }
}

export default InputList;
