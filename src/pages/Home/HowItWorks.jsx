import React from 'react';
import icon from '../../assets/bookingIcon.png'

const HowItWorks = () => {
    return (
        <div className='m-14 '>
            <h2 className='text-secondary font-bold text-2xl'>How It Works</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='m-5 card bg-base-200 shadow-xl p-5 gap-1.5'>
                    <img className='w-12 h-12' src={icon} alt="" />
                    <h2 className='font-bold text-secondary'>Booking Pick & Drop</h2>
                    <p className='text-sm text-slate-700'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='m-5 card bg-base-200 shadow-xl p-5 gap-1.5'>
                    <img className='w-12 h-12' src={icon} alt="" />
                    <h2 className='font-bold text-secondary'>Cash On Delivery</h2>
                    <p className='text-sm text-slate-700'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='m-5 card bg-base-200 shadow-xl p-5 gap-1.5'>
                    <img className='w-12 h-12' src={icon} alt="" />
                    <h2 className='font-bold text-secondary'>Delivery Hub</h2>
                    <p className='text-sm text-slate-700'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='m-5 card bg-base-200 shadow-xl p-5 gap-1.5'>
                    <img className='w-12 h-12' src={icon} alt="" />
                    <h2 className='font-bold text-secondary'>Booking SME & Corporate</h2>
                    <p className='text-sm text-slate-700'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;