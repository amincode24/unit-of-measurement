import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Form from "./Form";
import Container from "../UI/Container";
import Result from "./Result";
import classes from "./Main.module.css";
const quantity = [
  { id: "o1", option: "Length" },
  { id: "o2", option: "Time" },
];

const units = [
  { id: "u1", option: "m", type: "Length" },
  { id: "u2", option: "cm", type: "Length" },
  { id: "u3", option: "mm", type: "Length" },
  { id: "u4", option: "km", type: "Length" },
  { id: "u5", option: "dm", type: "Length" },
  { id: "u7", option: "seconds", type: "Time" },
  { id: "u8", option: "minute", type: "Time" },
  { id: "u9", option: "day", type: "Time" },
  { id: "u10", option: "week", type: "Time" },
  { id: "u11", option: "month", type: "Time" },
];

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState("Length");
  const [value, setValue] = useState(null);
  const inputRef = useRef(null);
  const typeSelectRef = useRef(null);
  const unitSelectRef = useRef(null);
  const unitAnswerSelectRef = useRef(null);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setSelectedTypes(selectedTypes);
  }, [selectedTypes]);

  const getSelectedTypes = () => {
    if (!selectedTypes) {
      return units;
    }
    return units.filter((item) => item.type === selectedTypes);
  };

  let filteredUnits = useMemo(getSelectedTypes, [selectedTypes]);

  const selectChangeHandler = (event) => {
    setSelectedTypes(event.target.value);
  };

  const calculate = useCallback(() => {
    const inputValue = inputRef.current.value;
    let unitQuestion = unitSelectRef.current.value;
    let unitAnswer = unitAnswerSelectRef.current.value;
    if (unitQuestion === "m") {
      if (unitAnswer === "m") {
        setValue(inputValue);
      } else if (unitAnswer === "cm") {
        setValue(inputValue * 100);
      } else if (unitAnswer === "mm") {
        setValue(inputValue * 1000);
      } else if (unitAnswer === "km") {
        setValue(inputValue / 1000);
      } else if (unitAnswer === "dm") {
        setValue(inputValue * 10);
      }
    } else if (unitQuestion === "cm") {
      if (unitAnswer === "m") {
        setValue(inputValue / 100);
      } else if (unitAnswer === "cm") {
        setValue(inputValue);
      } else if (unitAnswer === "mm") {
        setValue(inputValue * 10);
      } else if (unitAnswer === "km") {
        setValue(inputValue / 100000);
      } else if (unitAnswer === "dm") {
        setValue(inputValue / 10);
      } else if (unitAnswer === "inch") {
        setValue(inputValue * 2.54);
      }
    } else if (unitQuestion === "mm") {
      if (unitAnswer === "m") {
        setValue(inputValue / 1000);
      } else if (unitAnswer === "cm") {
        setValue(inputValue / 10);
      } else if (unitAnswer === "mm") {
        setValue(inputValue);
      } else if (unitAnswer === "km") {
        setValue(inputValue / 1000000);
      } else if (unitAnswer === "dm") {
        setValue(inputValue / 100);
      }
    } else if (unitQuestion === "km") {
      if (unitAnswer === "m") {
        setValue(inputValue * 1000);
      } else if (unitAnswer === "cm") {
        setValue(inputValue * 100000);
      } else if (unitAnswer === "mm") {
        setValue(inputValue * 1000000);
      } else if (unitAnswer === "km") {
        setValue(inputValue);
      } else if (unitAnswer === "dm") {
        setValue(inputValue * 10000);
      }
    } else if (unitQuestion === "dm") {
      if (unitAnswer === "m") {
        setValue(inputValue / 10);
      } else if (unitAnswer === "cm") {
        setValue(inputValue * 10);
      } else if (unitAnswer === "mm") {
        setValue(inputValue * 100);
      } else if (unitAnswer === "km") {
        setValue(inputValue / 10000);
      } else if (unitAnswer === "dm") {
        setValue(inputValue);
      }
    } else if (unitQuestion === "seconds") {
      if (unitAnswer === "seconds") {
        setValue(inputValue);
      } else if (unitAnswer === "minute") {
        setValue(inputValue / 60);
      } else if (unitAnswer === "day") {
        setValue(inputValue / 86400);
      } else if (unitAnswer === "week") {
        setValue(inputValue / 604800);
      } else if (unitAnswer === "month") {
        setValue(inputValue / 2629800);
      }
    } else if (unitQuestion === "minute") {
      if (unitAnswer === "seconds") {
        setValue(inputValue * 60);
      } else if (unitAnswer === "minute") {
        setValue(inputValue);
      } else if (unitAnswer === "day") {
        setValue(inputValue / 1440);
      } else if (unitAnswer === "week") {
        setValue(inputValue / 10080);
      } else if (unitAnswer === "month") {
        setValue(inputValue / 43830);
      }
    } else if (unitQuestion === "day") {
      if (unitAnswer === "seconds") {
        setValue(inputValue * 86400);
      } else if (unitAnswer === "minute") {
        setValue(inputValue * 1440);
      } else if (unitAnswer === "day") {
        setValue(inputValue);
      } else if (unitAnswer === "week") {
        setValue(inputValue / 7);
      } else if (unitAnswer === "month") {
        setValue(inputValue / 30);
      }
    } else if (unitQuestion === "week") {
      if (unitAnswer === "seconds") {
        setValue(inputValue * 604800);
      } else if (unitAnswer === "minute") {
        setValue(inputValue * 10080);
      } else if (unitAnswer === "day") {
        setValue(inputValue * 7);
      } else if (unitAnswer === "month") {
        setValue(inputValue * 0.22997947);
      } else if (unitAnswer === "week") {
        setValue(inputValue);
      }
    } else if (unitQuestion === "month") {
      if (unitAnswer === "seconds") {
        setValue(inputValue * 2629800);
      } else if (unitAnswer === "minute") {
        setValue(inputValue * 43830);
      } else if (unitAnswer === "day") {
        setValue(inputValue * 30);
      } else if (unitAnswer === "week") {
        setValue(inputValue / 0.22997947);
      } else if (unitAnswer === "month") {
        setValue(inputValue);
      }
    }
  }, []);

  let unitQuestion = unitSelectRef.current?.value;
  let unitAnswer = unitAnswerSelectRef.current?.value;
  let inputValue = inputRef.current?.value;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    showModalHandler();
    calculate();
  };
  return (
    <Container>
      <main>
        {showModal && (
          <Result
            onClose={hideModalHandler}
            value={value}
            number={inputValue}
            question={unitQuestion}
            answer={unitAnswer}
          />
        )}
        <div className={classes.select}>
          <select
            className={classes.select}
            onChange={selectChangeHandler}
            ref={typeSelectRef}
          >
            {quantity.map((item) => (
              <option key={item.id}>{item.option}</option>
            ))}
          </select>
          <select className={classes.select} ref={unitSelectRef}>
            {filteredUnits.map((item) => (
              <option key={item.id}>{item.option}</option>
            ))}
          </select>
          <select className={classes.select} ref={unitAnswerSelectRef}>
            {filteredUnits.map((item) => (
              <option key={item.id}>{item.option}</option>
            ))}
          </select>
        </div>
        <Form formSubmitHandler={formSubmitHandler} inputRef={inputRef} />
      </main>
    </Container>
  );
};

export default Main;
