import React from "react";

const DeleteUsers = props => {
  const handleDelete = () => {
    const { onDelete, user } = props;
    onDelete(user);
  };

  return (
    <div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteUsers;
