import React, { useState } from 'react'
import Header from '../comman/Header'
import { LC, NC, SC, UC } from '../Data/Passchar';
import { ToastContainer, toast } from 'react-toastify';

export default function Password() {
    let [uppercase,setUppercase] = useState(false);
    let [lowecase,setLowercase] = useState(false);
    let [number,setNumber] = useState(false);
    let [symbol,setSymbol] = useState(false);
    let [lenght,setLenght] = useState(10);
    let [password,setPassword] = useState('');
    let genreatePassword =()=>{
        let final = '';
        let charSet = '';
        if(uppercase || lowecase || number || symbol)
            {
                if(uppercase) charSet += UC;
                if(lowecase) charSet += LC;
                if(number) charSet += NC;
                if(symbol) charSet += SC;
                for(let i=0;i<lenght;i++)
                {
                    final += charSet[Math.floor(Math.random()*charSet.length)];
                }
                toast.success('Password Genrated Successfully!');
                setPassword(final);
            }
            else
            {
                toast.error('Please select atleast one character type');
            }
    }
    let copyPass = ()=>{
        navigator.clipboard.writeText(password);
        toast.success('Password Copied');
    }
  return (
    <>
    <Header/>
    <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />    
    <div className="pass-box">
        <div className="password">
            <h1>Password</h1>
            <div className="pass-input">
                <input type="text" className='rounded border-[2px] border-black' placeholder="Genrate Password" value={password} readOnly/>
                <button className='rounded border-[2px] border-black' onClick={copyPass}>Copy</button>
            </div>
            <div className="lenght">
                <label>Password Lenght<p className='text-left text-[15px] font-medium'>(lenght must between 8 to 20)</p></label>
                <input type="number" min={8} max={20} value={lenght} onChange={(event)=>setLenght(event.target.value)}/>
            </div>
            <div className="lenght">
                <label>Include Uppercase</label>
                <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
            </div>
            <div className="lenght">
                <label>Include Lowercase </label>
                <input type="checkbox" checked={lowecase} onChange={()=>setLowercase(!lowecase)}/>
            </div>
            <div className="lenght">
                <label>Include Numbers</label>
                <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
            </div>
            <div className="lenght">
                <label>Include Symbols</label>
                <input type="checkbox" checked={symbol} onChange={()=>setSymbol(!symbol)}/>
            </div>
            
            <button className='bg-[rgb(_8_255_234)] hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full' id='submit' onClick={genreatePassword}>Genrate Password</button>
        </div>
    </div>
    </>
  )
}
