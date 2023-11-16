import React, { useReducer, useState } from "react";
import classes from "./Form.module.css";
import Button from "../UI/Button";

const inputReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 0 };
  }
  return { value: "", isValid: false };
};
const Form = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const inputChangeHandler = (event) => {
    dispatch({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(event.target.value.trim().length > 0);
  };

  const validateInputHandler = () => {
    dispatch({ type: "INPUT_BLUR" });
  };

  return (
    <form
      className={`${classes.form} ${formIsValid ? classes.valid : ""}`}
      onSubmit={props.formSubmitHandler}
    >
      <input
        type="number"
        placeholder={!formIsValid ? "Entere a number" : ""}
        value={inputState.value}
        onChange={inputChangeHandler}
        onBlur={validateInputHandler}
        ref={props.inputRef}
      />
      <Button type="submit" className={classes.button} disabled={!formIsValid}>
        Calculate
      </Button>
    </form>
  );
};

export default Form;
