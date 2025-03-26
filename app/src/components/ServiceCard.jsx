import React from 'react';

const ServiceCard = ({name ,job}) =>{
    return (
        <div>
             <h1>{name}</h1>
             <p>{job}</p>
        </div>
    )
}
export default ServiceCard