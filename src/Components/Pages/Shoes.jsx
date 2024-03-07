
import React, { useContext, useEffect, useState } from 'react'
import ShoesItems from '../../ItemProducts/ShoesItems';
import { Card } from '../Card';
import { ShoesContext } from '../../contextAPI/Context';

export const Shoes = () => {
  const context = useContext(ShoesContext)
  const [ShoesProd,setShoesProd] = useState([]);
  const [Shoe,SetShoe] = useState([]);
   useEffect(() => {
    setShoesProd(ShoesItems)
   }, []);
  useEffect(()=>{
    console.log('Shoes Products is ', ShoesProd);
  },[ShoesProd])
 

  const AddToCart = (e)=>{
     const ClickedProductId = parseInt(e.target.id) ;
     const SelectedProduct = ShoesProd.find((prod)=>prod.id === ClickedProductId);
     console.log('Selected Product is ', SelectedProduct);
     SetShoe((prev)=>{return [...prev , SelectedProduct]})

  }
  const RemoveToCart = (e)=>{
    const ClickProductId = parseInt(e.target.id)
    const removeItem = Shoe.filter((item)=>item.id!==ClickProductId)
    SetShoe(removeItem)
  }
  useEffect(() => {
    console.log('Shoe is ', Shoe);
    context.UpdateShoesValue(Shoe)
  }, [Shoe]);
  return (
     <div className='px-20 flex flex-wrap gap-4 pt-4 pb-4'>
      {ShoesProd.map((prod)=>{
       return <Card id={prod.id} title ={prod.title} price={prod.price} fn={AddToCart} fn1={RemoveToCart} image = {prod.image} desc={prod.description}/>
      })}
     </div>
  )
}
