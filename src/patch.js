import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

const PatchDetails=()=>{
    const{uid}=useParams();
    const[eemail,updateeemail]=useState("");
    const getOrder=()=>{
        var url="http://localhost:1234/order/"+uid;
        axios.get(url).then(response=>{
            updateeemail(response.data.email);
        })
    }
    
    useEffect(()=>{
        getOrder();
    },[true]);

    const[msg, updatemsg] = useState("");
    const save=()=>{
        var url="http://localhost:1234/order/"+uid;
        var evalue={
        "email":eemail
        };
        axios.patch(url, evalue);
        updateeemail("");
        updatemsg("Patch Details updated Successfully!");
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-3 p-2 mt-5">
                    <p className='text-center text-danger'>{msg}</p>
                    <b><label>Enter new Email id</label></b>
                    <input type="text" className="form-control" onChange={obj=>updateeemail(obj.target.value)} value={eemail}/>
                    <p className="text-center">
                    <button className="btn btn-primary btn-sm mt-3" onClick={save}>Save</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default  PatchDetails;