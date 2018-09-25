import React from "react";

import DeleteUsers from "components/DeleteUsers";
import UpdateUsers from "components/UpdateUsers";

const InputList = props => {
  const style = {
    border: "1px solid",
    marginBottom: "1rem",
    width: "300px"
  };

  const { userList, toDelete, toUpdate } = props;

  const handleData = () => {
    console.log(props);

    return userList.map(user => {
      const { name, email, comment, likeDislike } = user;

      return (
        <div key={user.id} style={style}>
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

  return <div>{handleData()}</div>;
};

export default InputList;
