import React, { Component } from "react";
// catch error, defaultProps, state decom, spread

class InputComponent extends Component {
  state = {
    name: "",
    email: "",
    comment: "",
    likeDislike: ""
  };

  static defaultProps = {
    xxx: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { user } = this.props;

    e.preventDefault();

    user(this.state);

    this.setState({
      name: "",
      email: "",
      comment: "",
      likeDislike: ""
    });
  };

  render() {
    const { name, email, comment } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              name="name"
              value={name}
              placeholder="name"
            />
            <input
              onChange={this.handleChange}
              name="email"
              value={email}
              placeholder="email"
            />
          </div>
          <div>
            <textarea
              onChange={this.handleChange}
              name="comment"
              value={comment}
              placeholder="write your opinion"
            />
          </div>
          <div>
            <label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="likeDislike"
                value="like"
              />
              <span>Like</span>
            </label>
            <label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="likeDislike"
                value="dislike"
              />
              <span>Dislike</span>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default InputComponent;
