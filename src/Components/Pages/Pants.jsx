import { useContext, useEffect, useState } from "react";
import PantsItems from "../../ItemProducts/PantsItems";
import { Card } from "../Card";
import { PantsContext } from "../../contextAPI/Context";

export const Pants = ()=>{
   const context =  useContext(PantsContext)
    const [pantsProd,setPantsProd] = useState([]);
    const [Pant,setPant] = useState([]);
    useEffect(() => {
        setPantsProd(PantsItems)
    }, []);

    useEffect(() => {
        console.log('pants products are ' ,pantsProd)
    }, [pantsProd]);

    const AddToCart = (e)=>{
         const ClickedProductId = parseInt(e.target.id)
         const SelectedProduct = pantsProd.find((prod)=> prod.id ===ClickedProductId)
         console.log('Selected product is ', SelectedProduct);

         setPant((prev)=>{return [...prev, SelectedProduct]})
    }
    useEffect(() => {
        console.log('pants are ', Pant);
        context.UpdatePantsValue(Pant)
        
    }, [Pant]);
   
    const RemoveToCart = (e)=>{
        const ClickedProductId = parseInt(e.target.id);
        const RemoveProduct = Pant.filter((prod)=>prod.id !==ClickedProductId)
        setPant(RemoveProduct)
    }
    return(
        <div className="px-20 flex flex-wrap gap-4 pt-4 pb-4">
            {pantsProd.map((prod)=>{
                return <Card key={prod.id} title={prod.title} fn={AddToCart} fn1={RemoveToCart} price={prod.price} id={prod.id} desc={prod.description} image={prod.image}/>
            })}
        </div>
    )
}