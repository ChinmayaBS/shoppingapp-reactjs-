import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

const UpdateCustomer=()=>{
    const{uid}=useParams();
    const[ename,updateename]=useState("");
    const[econtact,updateecontact]=useState("");
    const[eemail,updateeemail]=useState("");
    const[eaddress,updateeaddress]=useState("");

    const getOrder=()=>{
        var url="http://localhost:1234/order/"+uid;
        axios.get(url).then(response=>{
            updateename(response.data.customername);
            updateecontact(response.data.mobile);
            updateeemail(response.data.email);
            updateeaddress(response.data.address);
        })
    }
    
    useEffect(()=>{
        getOrder();
    },[true]);

    const[cartitem, updateCart] = useState([]);
    const[msg, updatemsg] = useState("");
    const getCart = () =>{
        axios.get("http://localhost:1234/cart")
        .then(response=>{
            updateCart(response.data);
        })
    }
    useEffect(()=>{
        getCart();
    },[true]);
    
    const save=()=>{
        var url="http://localhost:1234/order/"+uid;
        var evalue={
        "customername":ename,
        "mobile":econtact,
        "email":eemail,
        "address":eaddress,
        "product":cartitem
        };
        axios.put(url, evalue);
        updateename("");
        updateecontact("");
        updateeemail("");
        updateeaddress("");
        updatemsg("Customer Details edited Successfully!");
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-3 p-2 mt-5">
                    <p className='text-center text-danger'>{msg}</p>
                    <label>Project Name</label>
                    <input type="text" className="form-control" onChange={obj=>updateename(obj.target.value)} value={ename} />
                    <label>Contact No</label>
                    <input type="text" className="form-control" onChange={obj=>updateecontact(obj.target.value)} value={econtact}/>
                    <label>Email id</label>
                    <input type="text" className="form-control" onChange={obj=>updateeemail(obj.target.value)} value={eemail}/>
                    <label>Project Address</label>
                    <textarea rows="5" cols="70" className="mt-2" onChange={obj=>updateeaddress(obj.target.value)} value={eaddress}></textarea>
                    <p className="text-center">
                    <button className="btn btn-primary btn-sm mt-3" onClick={save}>Save</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default UpdateCustomer;