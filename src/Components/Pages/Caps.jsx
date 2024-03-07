import { useContext, useEffect, useState } from "react";
import CapsItems from "../../ItemProducts/CapsItems";
import { Card } from "../Card";
import { CapsContext } from "../../contextAPI/Context";


export const Caps = () => {
  const context = useContext(CapsContext)
  const [CapsProd,setCapsProd] = useState([]);
  const [CapItems,setCapItems] = useState([]);
  useEffect(() => {
    setCapsProd(CapsItems)
  }, []);
  useEffect(() => {
    console.log('Caps products are ', CapsProd);
  }, [CapsProd]);
 
  const AddToCart = (e)=>{
    const ClickedProductId = parseInt(e.target.id);
    const SelectedProduct = CapsProd.find((prod)=>prod.id === ClickedProductId)
    console.log('Selected Product is ', SelectedProduct)
    setCapItems((prev)=>{
      return [...prev, SelectedProduct]
    })
  }
  const RemoveToCart = (e)=>{
     const ClickedProductId = parseInt(e.target.id)
     const removeItem = CapItems.filter((prod)=>prod.id !== ClickedProductId)
     setCapItems(removeItem);
  }
  useEffect(() => {
    console.log('caps Items are ', CapItems)
     context.UpdateCapsValue(CapItems);
  }, [CapItems]);
  return (
    <div className="px-20 flex flex-wrap gap-4 pt-4 pb-4">
      {CapsProd.map((prod)=>{
        return <Card key={prod.id} id={prod.id} fn={AddToCart} fn1={RemoveToCart} title={prod.title} price={prod.price} desc={prod.description} image={prod.image}/>
      })}
    </div>
  )
}
