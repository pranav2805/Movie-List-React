import React, { useRef } from "react";

import classes from "./AddMovie.module.css";

function DeleteMovie(props) {
  const idRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const id = idRef.current.value;

    props.onDeleteMovie(id);
    idRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">ID</label>
        <input type="text" id="id" ref={idRef} />
      </div>
      <button>Delete Movie</button>
    </form>
  );
}

export default DeleteMovie;
