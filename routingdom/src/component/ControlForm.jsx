import React, { useState } from 'react'
import { Button, Col, Container, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../comman/Header';

export default function ControlForm() {
    let [user ,setUser] = useState({
        uname : '',
        uemail: '',
        uphone: '',
        uaddress: '',
        index: ''
    })
    let [alluser,setAllUser] = useState([]);
    let getValue = (event)=>{
        let oldValue = {...user};
        let inputName = event.target.name;
        let inputValue = event.target.value;
        oldValue[inputName] = inputValue;
        setUser(oldValue);
        // console.log(user);
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        // let currentUser = {
        //     uname: user.uname,
        //     uemail: user.uemail,
        //     uphone: user.uphone,
        //     uaddress: user.uaddress
        // }
        let checkUser = alluser.filter((v)=>v.uemail == user.uemail || v.uphone == user.uphone);
        if(checkUser.length == 1)
        {
            toast.error('Email or phone number is already exist!');
        //    alert('Email or phone number is already exist!');
        }
        else
        {
          
            let oldAllUser = [...alluser,user];
            setAllUser(oldAllUser);
            if(user.index === '')
                {
                    toast.success('User added successfully!');
                }
                else
                {
                    toast.success('User updated successfully!');
                }
            setUser({
                uname : '',
                uemail: '',
                uphone: '',
                uaddress: '',
                index: ''
            })
            console.log(alluser);
        }   
    }

    let deleteRow = (index)=>{
        let afterUser = alluser.filter((v,i)=>i!= index);
        setAllUser(afterUser);
        toast.success('User deleted successfully!');
        // console.log(afterUser);
    }
    let editRow = (index)=>{
        let editData = alluser[index];
        editData.index = index;
        setUser(editData);
        let oldUsers = alluser.filter((v,i)=>i!= index);
        setAllUser(oldUsers);
        console.log(editData);
    }

  return (
        <>
        
            <Header/>
      <Container>
        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
        />    
        
        <Col lg={7}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" onChange={getValue} className="form-control name" name='uname' id="exampleInputName" value={user.uname} placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email</label>
                    <input type="email" onChange={getValue} className="form-control email" name='uemail' id="exampleInputEmail" value={user.uemail} placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputNumber">Number
                    </label>
                    <input type="number" onChange={getValue} className="form-control phone" name='uphone' id="exampleInputNumber" value={user.uphone} placeholder="Enter Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Address</label>
                    <textarea className="form-control" onChange={getValue} name='uaddress' id="exampleFormControlTextarea1" value={user.uaddress} rows="3"></textarea>
                </div>

                <button>{user.index == '' ? 'Submit' : 'Update'}</button>
            </form>
        </Col>
        <Col lg={12}>
        <Table>
        <thead>
            <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                alluser.length >= 1 ?
                alluser.map((item,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.uname}</td>
                    <td>{item.uemail}</td>
                    <td>{item.uphone}</td>
                    <td>{item.uaddress}</td>
                    <td><button onClick={()=>editRow(i)}>Update</button> <button onClick={()=>deleteRow(i)}>Delete</button></td>
                </tr>
                })
                
            :
            <tr>
                <td colSpan="6">No Data Found</td>
            </tr>

            }
            
            
        </tbody>
    </Table>
        </Col>
        </Container>
        </>
  )
}
