import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Navbar from "../shared/Header/Navbar";


const Service = () => {

    const [service, setService]= useState({});

    const {id} = useParams();


    const services = useLoaderData();
    console.log(services);

    useEffect(()=>{
        const findService = services?.find((service)=>service.id === id)
        setService(findService)
    },[id, services]);
    
 

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-4">
            <ServiceCard service={service}></ServiceCard>
            </div>
          

        </div>
    );
};

export default Service;