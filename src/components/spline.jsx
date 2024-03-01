import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className='h-screen w-screen flex items-center'>
            <div className='w-[25%] p-[50px]'>
                <h1 className='text-[55px] font-bold'>Cloth Composition</h1>
                <ul className='mt-10 list-disc list-inside font-bold text-xl'>
                    <li>100% cotton fabric</li>
                    <li>Durable with 100+ tests</li>
                    <li>Soft and breathable material</li>
                    <li>Easy to care for, machine washable</li>
                    <li>Classic crew neckline</li>
                    <li>Short sleeves for comfort</li>
                    <li>Regular fit for a versatile look</li>
                    <li>Available in various sizes and colors</li>
                    <li>Great for everyday wear or casual occasions</li>
                    <li>High-quality stitching for long-lasting wear</li>
                </ul>
            </div>
            <div className='w-[50%] h-screen'>
                <Spline scene="https://prod.spline.design/uHtWjJiWKd6w8YvP/scene.splinecode" />
            </div>
            <div>
            <p className="text-center text-xl font-bold mb-4">Select Size</p>
            <div className="flex flex-row">
                <div className={`w-10 h-10 rounded-full bg-red-500 mx-2 flex items-center justify-center backdrop-blur-xl bg-opacity-40 ${selectedSize === 'XS' ? 'border-2 border-slate-200 ' : ''}`} onClick={() => handleSizeClick('XS')}>
                    <p className="text-white">XS</p>

                </div>
                <div className={`w-10 h-10 rounded-full bg-blue-500 mx-2 flex items-center justify-center backdrop-blur-xl bg-opacity-40 ${selectedSize === 'S' ? 'border-2 border-slate-200 backdrop-blur bg-opacity-70' : ''}`} onClick={() => handleSizeClick('S')}>
                    <p className="text-white">S</p>
                </div>
                <div className={`w-10 h-10 rounded-full bg-green-500 mx-2 flex items-center justify-center backdrop-blur-xl bg-opacity-40 ${selectedSize === 'M' ? 'border-2 border-slate-200 backdrop-blur bg-opacity-70' : ''}`} onClick={() => handleSizeClick('M')}>
                    <p className="text-white">M</p>
                </div>
                <div className={`w-10 h-10 rounded-full bg-yellow-500 mx-2 flex items-center justify-center backdrop-blur-xl bg-opacity-40 ${selectedSize === 'L' ? 'border-2 border-slate-200 backdrop-blur bg-opacity-70' : ''}`} onClick={() => handleSizeClick('L')}>
                    <p className="text-white">L</p>
                </div>
                <div className={`w-10 h-10 rounded-full bg-purple-500 mx-2 flex items-center justify-center backdrop-blur-xl bg-opacity-40 ${selectedSize === 'XL' ? 'border-2 border-slate-200 backdrop-blur bg-opacity-70' : ''}`} onClick={() => handleSizeClick('XL')}>
                    <p className="text-white">XL</p>
                </div>
            </div></div>
        </div>
    );
}
