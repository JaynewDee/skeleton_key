import { useReducer } from "react";
import {} from "./actions";

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state: any, action: any) => {};

export function useUserReducer(initialState: any) {
  return useReducer(reducer, initialState);
}
