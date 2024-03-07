import { createContext } from "react";

export const HomeContext = createContext({  HomeProduct:[], UpdateHomeValue : function(){}})
export const shirtcontext = createContext({ shirtProduct:[], UpdateShirtValue : function(){}})
export const CartContext = createContext({ cartprod:[], UpdatecartValue : function(){}})
export const ShoesContext = createContext({ShoesProd : [], UpdateShoesValue : function(){}})
export const PantsContext = createContext({PantsProd : [], UpdatePantsValue : function(){}})
export const CapsContext = createContext({CapsProd : [], UpdateCapsValue : function(){}})
