import React from "react";
import { ReactPropTypes } from "react";
import img from "../Profile/image/MSD.jpg";
import prototype from 'prop-types';

const Profil = (props) => {
    const {FullName, bio, profession, handleName}= props
    return (
        <div style={{color:'MediumSlateBlue', textAlign:'center'}}>
            <h1> Hello my name is {props.FullName}</h1>
            <p>I am {props.bio}</p>
            <p>They call me {props.profession}</p>
            <img src={img} style={{width:300, borderRadius:25}}/>
            <br></br> 
            <button style={{marginTop:10, width:85, backgroundColor:'MediumSlateBlue', borderRadius:20}} onClick={()=>props.data(`Hello ! my name is ${props.FullName}`)}>click</button>
        </div>
    )
}



Profil.defaultProps={

    FullName:'Muhammed',
    bio:'Bio',
    profession:'Web developer',
};

Profil.prototype={
    FullName : prototype.string.isRequeired,
    bio : prototype.string,
    profession : prototype.string,
    handleName : prototype.func,
};
export default Profil