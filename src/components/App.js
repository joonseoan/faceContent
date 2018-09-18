import React, { Component, Fragment } from "react";
import InputComponent from "components/InputComponent";
import InputList from "components/InputList";

class App extends Component {
  id = 0;

  state = {
    users: []
  };

  handleData = userState => {
    const { users } = this.state;

    this.setState({
      users: users.concat({
        userState,
        id: this.id++
      })
    });
  };

  render() {
    return (
      <Fragment>
        <div>
          <InputComponent user={this.handleData} />
          <InputList userList={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default App;
