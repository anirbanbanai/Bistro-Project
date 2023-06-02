import { useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthPrvider';
// import { response } from 'express';

const useAxiosSecure = ()=>{
    const {LogOut} = useContext(AuthContext);
    const navigate  = useNavigate();
    
    const axiosSecure = axios.create({
        baseURL:"http://localhost:5000",
    });

    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('access-token');
            if(token){
                config.headers.Authorization = `bearer ${token}`
            }
            return config;
        });
        axiosSecure.interceptors.response.use((response)=>
            response, async(error)=>{
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    await LogOut();
                    navigate('/login')
                }
                return Promise.reject(error)
            }
        );
    }, [LogOut, navigate, axiosSecure]);
    
    return [axiosSecure];
};

export {useAxiosSecure}


// import React, { useEffect, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// const useAxiosSecure = () => {
//   const navigate = useNavigate();
//   const { logOut } = useContext(AuthContext);

//   const axiosSecure = axios.create({
//     baseURL: 'https://api.example.com', // Replace with your base URL
//   });

//   axiosSecure.interceptors.request.use((config) => {
//     const token = localStorage.getItem('access-token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });

//   axiosSecure.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       if (error.response && (error.response.status === 401 || error.response.status === 403)) {
//         await logOut();
//         navigate('/login');
//       }
//       return Promise.reject(error);
//     }
//   );

//   return axiosSecure;
// };

// export default useAxiosSecure;
