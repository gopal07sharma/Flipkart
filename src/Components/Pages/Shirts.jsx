// import React from 'react'

import { useContext, useEffect, useState } from "react"
import {  ShirtItemsManual } from "../../ItemProducts/ShirtItems"
import {  Card } from "../Card"
import { HomeContext, shirtcontext } from "../../contextAPI/Context"

export const Shirts = () => {
  const context = useContext(shirtcontext)
  const [shirt,setShirt] = useState([]);
    const [shirtProducts, setShirtProducts] = useState([])
    useEffect(()=>{
        setShirtProducts(ShirtItemsManual)
    },[])
    useEffect(()=>{
        console.log('Shirts Are ', shirtProducts)
    },[shirtProducts])
    const RemoveToCart = (e) => {
      const ClickedProductId = parseInt(e.target.id);
      const removeItem = shirt.filter((item)=>item.id!==ClickedProductId)
      setShirt(removeItem);
  };

  const AddToCart = (e)=>{ 
       const ClickedProductId = parseInt(e.target.id);
       const SelectedProduct = shirtProducts.find((prod)=>prod.id === ClickedProductId)
       console.log('SelectedProduct ', SelectedProduct)
       setShirt((prev)=>{return [...prev, SelectedProduct]});     
  }
  useEffect(() => {
    console.log('shirt is ', shirt)
     context.UpdateShirtValue(shirt)
  }, [shirt]);
  return (
    <div className="px-20 flex flex-wrap gap-4 pt-4 pb-4">
      {shirtProducts && shirtProducts.map((prod)=><Card key={prod.id} id={prod.id} fn={AddToCart} fn1={RemoveToCart} title={prod.title} price={prod.price} desc={prod.description} image={prod.image}/>)}
    </div>
  )
}
