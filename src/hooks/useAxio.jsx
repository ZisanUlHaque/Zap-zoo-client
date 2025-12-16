import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: 'https://zap-shift-server-six-psi.vercel.app'
})

const useAxio = () => {
    return axiosInstance
};

export default useAxio;