import { useReducer } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

type formReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const INITIAL_STATE = {
  nick: "",
  subMonth: 0,
  avatar: "",
  description: "",
};

const formReducer = (
  state: FormState["inputValues"],
  action: formReducerAction
) => {
  switch (action.type) {
    case "change_value":
      // eslint-disable-next-line no-case-declarations
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;
  }
};

export const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};
