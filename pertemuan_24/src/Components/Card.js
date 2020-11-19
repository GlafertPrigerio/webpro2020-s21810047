  
import React from 'react'


export const Card = ({name, username, email, phone}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}