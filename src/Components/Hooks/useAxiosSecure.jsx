import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthPrvider';
// import { response } from 'express';

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
    const { LogOut } = useContext(AuthContext);
    const navigate = useNavigate();

   

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `bearer ${token}`
            }
            return config;
        });
        axiosSecure.interceptors.response.use((response) =>
            response, async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await LogOut();
                    navigate('/login')
                }
                return Promise.reject(error)
            }
        );
    }, [LogOut, navigate, axiosSecure]);

    return [axiosSecure];
};

export { useAxiosSecure }


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


axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
