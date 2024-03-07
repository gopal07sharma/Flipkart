
import { Navbar } from "./Components/Navbar";
import { Cart } from "./Components/Pages/Cart";
import { Home } from "./Components/Pages/Home";
import {Routes , Route} from 'react-router-dom';
import { Shirts } from "./Components/Pages/Shirts";
import { Pants } from "./Components/Pages/Pants";
import { Shoes } from "./Components/Pages/Shoes";
import { Caps } from "./Components/Pages/Caps";
import { CapsContext, CartContext, HomeContext, PantsContext, ShoesContext, shirtcontext } from "./contextAPI/Context";
import { useEffect, useState } from "react";

const App = () => {
  const [cartCount , setCartCount ] = useState(0)
  const [homeprod , setHomeprod]= useState([])
  const [shirtprod , setShirtprod]= useState([])
  const [cart,setCart] = useState([]);
  const [ShoeProd , setShoeProd] = useState([]);
  const [PantProduct,setPantProduct] = useState([]);
  const [CapProduct,setCapProduct] = useState([]);

  const handleHomecart = (array)=>{
    console.log("array is",array)
    const obj=array.map((e)=> e)
    console.log("obj is",obj)

          setHomeprod(array)

  }
  const HandleCapsCart = (array)=>{
       setCapProduct(array)
  }
  const handleShirtCart = (array) => {
    // const obj=array.filter((e)=> e)
    // console.log("obj is",obj)
    setShirtprod(array)
  };
  const handleCart = (arrays) => {
    if(arrays)
    setCart([...shirtprod,...homeprod,...ShoeProd,...PantProduct, ...CapProduct])
  };
  const HandleShoesCart = (array)=>{
   setShoeProd(array)
  //  console.log('ShoeProduct is ', ShoeProd)
  }
  useEffect(() => {
    handleCart(CapProduct)
  }, [CapProduct]);
  useEffect(() => {
    console.log('Shoes product is ', ShoeProd);
    handleCart(ShoeProd)
  }, [ShoeProd]);
  useEffect(() => {
    handleCart(PantProduct)
  }, [PantProduct]);
  useEffect(() => {
    console.log('cart is',cart);
  }, [cart]);
  useEffect(() => {
    console.log('shirt',shirtprod);
    handleCart(shirtprod)
  }, [shirtprod]);
  useEffect(() => {
    console.log('home',homeprod);
    handleCart(homeprod)
  }, [homeprod]);
  const HandlePantsCart = (array)=>{
       setPantProduct(array)
  }
  useEffect(() => {
    console.log('Pants products on app ', PantProduct);
  }, [PantProduct]);

  return (
    
    <CartContext.Provider value={{ cartprod:cart ,UpdatecartValue: handleCart }}>
    <shirtcontext.Provider value={{ shirtProduct:shirtprod ,UpdateShirtValue: handleShirtCart }} >
      <HomeContext.Provider value={{ HomeProduct:homeprod ,UpdateHomeValue: handleHomecart }}>
        <ShoesContext.Provider value={{ShoesProd : ShoeProd , UpdateShoesValue: HandleShoesCart}}>
          <PantsContext.Provider value={{PantsProd: PantProduct , UpdatePantsValue: HandlePantsCart}}>
            <CapsContext.Provider value={{CapsProd: CapProduct , UpdateCapsValue: HandleCapsCart}}>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Shirts" element={<Shirts/>}/>
        <Route path="/Pants" element={<Pants/>}/>
        <Route path="/Caps" element={<Caps/>}/>
        <Route path="/Shoes" element={<Shoes/>}/>
      </Routes>
    </div>
    </CapsContext.Provider>
    </PantsContext.Provider>
    </ShoesContext.Provider>
    </HomeContext.Provider>
    </shirtcontext.Provider>
    </CartContext.Provider>
  );
};
export default App;
