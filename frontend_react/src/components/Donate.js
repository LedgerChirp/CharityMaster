import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Donate = () => {

    const navigate = useNavigate();
    const callPage = async () => {
        try {
            const res = await fetch('/donate', {
                method : "get",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });
            const data = await res.json();
            console.log(data);
            if(data !== false){
                navigate('/donate');
            }else{
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            navigate('/login');
        }
    }

    useEffect(() => {
        callPage();
    }, [])
    
  return (
    <>
      <form method="get"></form>
    </>
  )
}

export default Donate
