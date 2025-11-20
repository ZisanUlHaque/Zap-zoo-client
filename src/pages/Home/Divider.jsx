import React from "react";
import liveTracking from "../../assets/live-tracking.png";
import safeDelivery from "../../assets/safe-delivery.png";

const serviceData = [
    {
        title: "Live Parcel Tracking",
        desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        img: liveTracking,
    },
    {
        title: "100% Safe Delivery",
        desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        img: safeDelivery,
    },
    {
        title: "24/7 Call Center Support",
        desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        img: safeDelivery,
    },
];


const Divider = () => {
    return (
        <div className="w-full bg-[#f5f7f7] py-12 mt-10">
            <div className="m-5 hidden md:block">
                <div className="border-t-2 border-dotted border-gray-300 mb-6"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 space-y-10">
                {serviceData.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center bg-white rounded-2xl p-6 shadow-sm gap-6">
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img src={item.img} alt={item.title} className="w-28 md:w-36" />
                        </div>
                        <div className="hidden md:flex h-full justify-center">
                            <div className="border-l-2 border-dotted border-gray-300 h-32"></div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="m-5 hidden md:block">
                <div className="border-t-2 border-dotted border-gray-300 mb-6"></div>
            </div>
        </div>
    );
};

export default Divider;