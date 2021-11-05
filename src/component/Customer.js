import React from "react";

function Customer(probs) {
    return(
        <div>
            <CustomerProfile id={probs.id} image={probs.image} name={probs.name}/>
            <CustomerInfo birthday={probs.birthday} gender={probs.gender} job={probs.job}/>
        </div>
    )
}

function CustomerProfile(probs) {
    return(
        <div>
            <img src={probs.image} alt="profile"/>
            <h2>{probs.name}({probs.id})</h2>
        </div>
    )
}

function CustomerInfo(probs){
    return(
        <div>
            <p>{probs.birthday}</p>
            <p>{probs.gender}</p>
            <p>{probs.job}</p>
        </div>
    )
}

export default Customer;
