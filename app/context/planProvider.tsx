"use client"

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export interface planInterface {
    name: string,
    price: number
}

export interface planContext {
    chosenPlan: planInterface,
    setChoosenPlan: Dispatch<SetStateAction<planInterface>>
}

const defaultState = {
    chosenPlan: { name: '', price: 0 },
    setChoosenPlan: () => {},
} as planContext;

const Context = createContext(defaultState);

export const PlanProvider = (props) => {
    const [chosenPlan, setChoosenPlan] = useState({
        name: '',
        price: 0
    });
    
    return (
      <Context.Provider value={{ chosenPlan, setChoosenPlan }}>
        {props.children}
      </Context.Provider>
    );
  };

export const GetContext = () => {
    return useContext(Context);
};