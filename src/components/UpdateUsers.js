import React, { Component } from "react";

class UpdateUsers extends Component {
  state = {
    update: false
  };

  handleUpdate = () => {
    const { onUpdate, user } = this.props;
    const { update } = this.state;

    this.setState({
      update: !update
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleUpdate}>
          {this.state.update === false ? "Update" : "Enter"}
        </button>
      </div>
    );
  }
}

export default UpdateUsers;
