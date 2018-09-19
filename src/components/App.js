import React, { Component } from "react";

import InputComponent from "components/InputComponent";
import InputList from "components/InputList";

class App extends Component {
  id = 0;

  state = {
    users: []
  };

  addUsers = userState => {
    const { users } = this.state;
    this.setState({
      users: users.concat({
        ...userState,
        id: this.id++
      })
    });
  };

  deleteUsers = user => {
    const { users } = this.state;

    this.setState({
      users: users.filter(userInfo => userInfo.id !== user.id)
    });
  };

  updateUsers = user => {
    const { users } = this.state;
    const { name, email, comment, likeDislike, id } = user;
    this.setState({
      users: users.forEach(userInfo => {
        if (userInfo.id === id) {
          userInfo.name = name;
          userInfo.email = email;
          userInfo.comment = comment;
          userInfo.likeDislike = likeDislike;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <InputComponent user={this.addUsers} />
        <InputList
          userList={this.state.users}
          toDelete={this.deleteUsers}
          toUpdate={this.updateUsers}
        />
      </div>
    );
  }
}

export default App;
