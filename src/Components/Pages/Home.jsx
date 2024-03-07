import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../utils/api-client"
import { Card } from "../Card";
import { HomeContext } from "../../contextAPI/Context";

export const Home = ()=>{
    const context = useContext(HomeContext)
    const [SelectedItem , setSelectedItem]= useState([])

    const [products, setproducts] = useState([])
    useEffect(()=>{
        getProducts().then((data)=>{
            setproducts(data)
            
       }).catch(()=>{
           console.log(err)
       })
    },[])
    useEffect(()=>{
        console.log('products is ', products)
    },[products])
    const RemoveToCart = (e) => {
        const ClickedProductId = parseInt(e.target.id);
        const removeItem = SelectedItem.filter((item)=>item.id!==ClickedProductId)
        setSelectedItem(removeItem);
    };

    const AddToCart = (e)=>{ 
         const ClickedProductId = parseInt(e.target.id);
         const SelectedProduct = products.find((prod)=>prod.id === ClickedProductId)
         console.log('SelectedProduct ', SelectedProduct)
         setSelectedItem((prev)=>{return [...prev, SelectedProduct]}); 
             
    }
    useEffect(()=>{
        console.log('selected item is ', SelectedItem)
        context.UpdateHomeValue(SelectedItem)
        // setSelectedItem([])
    
    }
        ,[SelectedItem])
       
    return(
        <div className="px-20 flex flex-wrap gap-4 pt-4 pb-4">
            {products.map((data , index)=> <Card  key={index} fn={AddToCart} fn1={RemoveToCart} id={data.id} title={data.title.slice(0,40)} price={data.price} image={data.image} desc={data.description.slice(0,100)} rating={data.rating.rate}/>)}
        </div>
    )
}