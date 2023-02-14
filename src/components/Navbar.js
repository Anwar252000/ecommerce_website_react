import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

    return (
        <>
           <div className={`nav fixed w-full top-0 z-10 flex justify-around px-3 py-2 bg-${props.mode} text-white`}>
            <div className="brand text-xl font-sans font-bold cursor-pointer ">IzSofa</div>
            <ul className='flex space-x-8'>
            <li><Link className='group transition duration-300 hover:text-white' to="/">Home <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span></Link></li>
                <li><Link className='group transition duration-300 hover:text-white' to="/about">About <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span></Link></li>
                <li><Link className='group transition duration-300 hover:text-white' to="/contact">Contact <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span></Link></li>
                <li><Link className='group transition duration-300 hover:text-white' to="/blogs">Blogs <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span></Link></li>
            <li><input className='border rounded-l-md px-2 text-black' type="search" name="search" id="search" placeholder='Search'/><button className='text-black bg-white rounded-r-md border px-1' ><i className='fa fa-search'></i></button>
              </li>
              <li><Link className='hover:text-slate-500' to="/contact"><i className='fa fa-user'></i></Link></li>
              <li><a className='hover:text-slate-500' href="#"><i className='fa fa-shopping-cart'></i></a></li>
              <input type="checkbox" className="toggle" onClick={props.modeFun} />
            </ul>
           </div>
        
        </>
    )
}

export default Navbar