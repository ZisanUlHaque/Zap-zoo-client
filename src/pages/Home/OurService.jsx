import React from 'react';
import bitch from '../../assets/service.png'

const OurService = () => {
    return (
        <div className='bg-secondary p-10 gap-8'>
            <h2 className='text-white text-3xl text-center font-bold mt-4'>Our Services</h2>
            <p className='text-slate-300 text-center text-sm mt-2 mb-3'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='m-5 card bg-base-200 shadow-xl p-6 gap-3 items-center text-center hover:bg-[#CAEB66] transition-all duration-300'>
                    <img className='w-12 h-12' src={bitch} alt="" />
                    <h2 className='font-bold text-secondary'>Express  & Standard Delivery</h2>
                    <p className='text-sm text-slate-600'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
                </div>
                <div className='m-5 card bg-base-200 shadow-xl p-6 gap-3 items-center text-center hover:bg-[#CAEB66] transition-all duration-300'>
                    <img className='w-12 h-12' src={bitch} alt="" />
                    <h2 className='font-bold text-secondary'>Nationwide Delivery</h2>
                    <p className='text-sm text-slate-600'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                <div className='m-5 card bg-base-200 shadow-xl p-6 gap-3 items-center text-center hover:bg-[#CAEB66] transition-all duration-300'>
                    <img className='w-12 h-12' src={bitch} alt="" />
                    <h2 className='font-bold text-secondary'>Fulfillment Solution</h2>
                    <p className='text-sm text-slate-600'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                <div className='m-5 card bg-base-200 shadow-xl p-6 gap-3 items-center text-center hover:bg-[#CAEB66] transition-all duration-300'>
                    <img className='w-12 h-12' src={bitch} alt="" />
                    <h2 className='font-bold text-secondary'>Cash on Home Delivery</h2>
                    <p className='text-sm text-slate-600'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                <div className='m-5 card bg-base-200 shadow-xl p-6 gap-3 items-center text-center hover:bg-[#CAEB66] transition-all duration-300'>
                    <img className='w-12 h-12' src={bitch} alt="" />
                    <h2 className='font-bold text-secondary'>Corporate Service / Contract In Logistics</h2>
                    <p className='text-sm text-slate-600'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className='m-5 card bg-base-200 shadow-xl p-6 gap-3 items-center text-center hover:bg-[#CAEB66] transition-all duration-300'>
                    <img className='w-12 h-12' src={bitch} alt="" />
                    <h2 className='font-bold text-secondary'>Parcel Return</h2>
                    <p className='text-sm text-slate-600'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>

            </div>
            
        </div>
    );
};

export default OurService;