import React from "react";
import classes from "./Result.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
const Result = (props) => {
  return (
    <Modal>
      <div className={classes.result}>
        <div className={classes["result-title"]}>
          <p>
            {props.number} {props.question}
          </p>
          =
          <p>
            {props.value} {props.answer}
          </p>
        </div>
        <div className={classes.action}>
          <Button className={classes.button} onClick={props.onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Result;
