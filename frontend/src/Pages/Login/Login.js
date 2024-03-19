import React from 'react'
import LogoImage from "../../Components/Images/logo-text-nobg.png";

export default function Login() {
  return (
    <div className="flex justify-evenly items-center bg-gradient-to-b from-white to-beige-1 h-screen">
        <img src={`${LogoImage}`} alt="logo" className="w-1/3"/>
        <div className="bg-beige-2 p-5 flex items-center justify-center w-1/3 rounded-3xl shadow-xl">
        <form action="/" method="post" className="flex flex-col items-center gap-3">
            
                <h2 className="text-3xl font-medium mb-2">Login</h2>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="p-1 border border-solid border-gray-100 rounded-lg w-60 shadow"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="p-1 border border-solid border-gray-100 rounded-lg w-60 shadow"/>
                </div>
                <button type="button" className="bg-black text-white p-2.5 border-none rounded-full cursor-pointer w-40 hover:bg-gray-600 duration-300 mt-2"> Login </button>
                <p className="underline cursor-pointer hover:text-gray-600 duration-300">New user?</p>
            </form>
        </div>
        
    </div>
  );
}