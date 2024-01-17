import React,{useContext, useState,useEffect} from 'react'
// import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
// ------------
import { FaShopify } from "react-icons/fa"
import { Link, useLocation  } from 'react-router-dom';
// 
import Hamburger from 'hamburger-react'
import allwomenswear from '../../Api/WomensApi';
import Allmenswear from '../../Api/MenswearApi';
import AllKidsWear from '../../Api/kidswearApi';
import Allshoes from '../../Api/ShoesApi';
// 
// import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../Firebase.congif';
import Admin from '../AdminPage/Admin';
import { CardContext } from '../../Context/CardContext/CardContext';






function Navbar ()  {

  const [isOpen, setOpen] = useState(false)
  const [slide,setslide] = useState(false)

  const {cartItems} = useContext(CardContext)

  // 

  const [user, setUser] = useState(false)

  // 


    const {pathname} =useLocation()
    console.log(pathname);
   


  useEffect(() => {
    const unSubscibe = auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
    return ()=> unSubscibe()
  }, [])



   
  return (
    <div className='w-full sticky top-0 left-0  z-50 transition-all ' >
          {/* MAIN NAV-BAR */}
        <nav className='flex justify-between shadow  w-screen bg-white relative lg:pr-5 '> 
          <div className='m-2 flex  md:space-x-3'>
              <h1 className=' text-xl md:text-3xl'>SellerList</h1>
              <FaShopify className='text-2xl md:text-3xl'/>
           </div>

            <div className='h-12  flex items-center  '>
               {
      !user ?(<div>

        <button className='border rounded-full px-4 py-1.5 text-base mr-2 hover:text-white hover:bg-black '><Link to={"/sign-up"}>Signup</Link></button>
        <button className= ' border bg-black text-white rounded-full text-base  px-4 py-1.5 mr-2  hover:text-black hover:bg-white '><Link to={"/login"}>Login</Link></button>
      </div>
        ):(
          <Admin user={user}/>
          
        )
      
     }

                 
                 
            </div>

        </nav>

        {/* SECOND NAV-BAR  */}

        <div className={pathname === '/dashboard' ? 'hidden' : 'block'}>


        <nav className='shadow-md h-12 text-sky-800 pr-1 bg-white w-screen flex justify-between items-center  lg:pr-5 '>
             
             <div className=' '>

             
               <button onClick={()=>{setslide(!slide)}} className='md:hidden'>
               <Hamburger toggled={isOpen} toggle={setOpen} />
               </button>

               
            
            <ul className={ slide ? 'fixed w-1/2 h-screen  -mt-1   duration-500 ease-in-out bg-zinc-200 text-black text-xl ':'hidden  md:flex space-x-4 md:text-lg ' }>
                <Link to={'/'}  > <li className='cursor-pointer rounded-xl  p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border '> HomePage</li></Link>
                <Link to={'/womenswear'} state={allwomenswear} > <li className='cursor-pointer rounded-xl p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border ' >Womenswear</li></Link>
                <Link to={'/menswear'}state={Allmenswear} > <li className='cursor-pointer rounded-xl p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border '> Menswear </li></Link>
                <Link to={"/kidswear" }state={AllKidsWear} ><li className='cursor-pointer rounded-xl p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border '>Kidswear</li></Link>
                <Link to={"/shoes"} state={Allshoes}> <li className='cursor-pointer rounded-xl  p-2 hover:font-bold hover:bg-cyan-500 hover:text-white hover:border ' >Shoes</li></Link>

                
            </ul>
             </div>



       <div className='mr-2 flex'>
  
            <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 ">Sell Items</button>
             <Link to={"/cart"}>
             <div>
          
             <Badge  badgeContent={cartItems.length === 0 ? "":cartItems.length} color="primary" >
             <ShoppingCartIcon/>
             </Badge>
             </div>
             </Link>
      </div>
        </nav>
        </div>
    </div>
  )
}

export default Navbar
