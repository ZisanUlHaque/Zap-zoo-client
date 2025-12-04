import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxio = () => {
    return axiosInstance
};

export default useAxio;