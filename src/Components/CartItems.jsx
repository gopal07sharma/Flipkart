import React, { useContext, useEffect, useState } from 'react'
import { Items } from './Items'
import { CartContext } from '../contextAPI/Context'

export const CartItems = () => {
  const context = useContext(CartContext)
  const [cart,setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0
    context.cartprod.forEach((e)=>{
      
      sum+=e.price;
      return sum;
    })
    setCart(context.cartprod)
    setTotal(sum)
  }, []);
  useEffect(() => {
    console.log('total ', total);
  }, [total]);

  
      return(
        <>{cart.length ? <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>
      
          <div className="mx-auto mt-8  max-w-md md:mt-12">
            <div className="rounded-3xl  bg-white shadow-lg">
              <div className="px-4 py-6 sm:px-8  sm:py-10">
                <div className='h-full flex flex-col gap-10 '>
               {context.cartprod.map((prod,idx)=><Items key={idx} name={prod.title} price={prod.price} image={prod.image} />)}
               </div>
                 <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" /> 
      
                <div className="mt-6 space-y-3 border-t border-b py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">$8.00</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> {(total+8.00).toFixed(2)}</p>
                </div>
      
                <div className="mt-6 text-center">
                  <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    Place Order
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>:<h1>Not cart item</h1>}</>
      )
  
}
