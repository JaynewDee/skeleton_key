import { useReducer } from "react";
import {} from "./actions";

export const reducer = (state: any, action: any) => {};

export function useUserReducer(initialState: any) {
  return useReducer(reducer, initialState);
}
