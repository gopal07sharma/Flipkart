// import Root from "postcss/lib/root";

import { useContext } from "react"
import ROOT from "../Routes"

import {useNavigate} from 'react-router-dom'
import { CartContext } from "../contextAPI/Context"
export const Navbar = ()=>{
   const context =  useContext(CartContext)
    const navigate = useNavigate()
return(
    <div>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap mx-auto max-w-screen-xl p-2">
            <img  src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png" className="h-12 text-2xl" alt="Flowbite Logo" />
          
            <span className=" text-2xl bold dark:text-white">Flipkart</span>
        <div className="ml-auto"> 
        
<button onClick={()=>{ navigate(ROOT.CART) }} type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
<span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{context.cartprod.length}</div>
</button>
<button onClick={()=>{ navigate(ROOT.CART) }} className="dark:text-white">Cart</button>
  &nbsp;
  &nbsp;
        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
        </div>
     
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm gap-8">
                <li>

                <button  onClick={()=>{
                    navigate(ROOT.HOME)
                    }}  className="text-2xl dark:text-white hover:underline ">Home</button>
                </li>
                {/* <li>
                <button  onClick={()=>{ navigate(ROOT.CART) }}  className="text-2xl dark:text-white hover:underline ">Cart</button>
                </li> */}
                <li>
                    <button  onClick={()=>{ navigate(ROOT.SHIRTS) }} className="text-2xl dark:text-white hover:underline ">Shirts</button>
                </li>
                <li>
                <button  onClick={()=>{ navigate(ROOT.PANTS) }} className="text-2xl dark:text-white hover:underline ">Pants</button>
                </li>
                <li>
                <button  onClick={()=>{ navigate(ROOT.CAPS) }} className="text-2xl dark:text-white hover:underline ">Caps</button>
                </li>
                <li>
                <button  onClick={()=>{ navigate(ROOT.SHOES) }} className="text-2xl dark:text-white hover:underline ">Shoes</button>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
)
}
