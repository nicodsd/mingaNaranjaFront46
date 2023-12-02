import { useState } from 'react';
import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import apiUrl from '../../api';
import image from '../assets/images/dona.png'
import image2 from '../assets/images/dona2.png'
import { FaDonate } from 'react-icons/fa'

const Donation = () => {
    initMercadoPago("TEST-91e1404f-680a-4d36-be08-9236755ac2a1");

    const [preferenceId, setPreferenceId] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleDonation = async (amount) => {
        try {
            const response = await axios.post(`${apiUrl}donation`, {
                unit_price: amount,
            });
            const preferenceId = response.data.preferenceId;

            setPreferenceId(preferenceId);

            setAmount(amount)
        } catch (error) {
            console.error(error);
        }
    };

    const customization = {
        visual: {
            buttonBackground: 'blue',
            borderRadius: '2rem',
            valuePropColor: "white",
        },
    }

    return (
        <>
            {preferenceId === false ?
                <div className='text-white h-screen flex flex-col justify-center items-center bg-[url(images/donate-image.png)] bg-no-repeat bg-cover'>
                    <div className='absolute w-full h-full z-20'>
                        <div className=' bg-gradient-to-b from-[#fff0] to-black absolute w-full h-[40%] bottom-0'></div>
                        <img src={image} className='absolute w-[25%] bottom-0 left-[-10px] z-0'/>
                        <img src={image2} className='absolute w-[30%] top-8 right-4 z-0'/>
                    </div>
                    <div className='bg-[#1111116c] w-full h-full absolute z-10'></div>
                    <div className='bg-[#6e6e6e3d] border-[1px] border-[#a7a7a742] rounded-lg duration-200 backdrop-blur-[2px] hover:backdrop-blur-[4px] z-20 w-[62%] h-[50%] flex flex-col items-center justify-around'>
                        <h1 className='text-[2.8rem] pr-[2%] flex font-extrabold'>
                            Donation page <FaDonate className='w-8 animate-bounce ml-2 mt-[13px]'/>
                        </h1>
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
                            <div
                                className="flex flex-col rounded-lg bg-white shadow-[0_2px_12px_-3px_rgba(0,0,0,0.1),0_10px_15px_-2px_rgba(0,0,0,0.05)] dark:bg-white md:max-w-xl md:flex-row">
                                <div className="flex flex-col justify-center items-center p-6">
                                    <h5
                                        className="mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-800">
                                        Donation of $1.000
                                    </h5>
                                    <button className='w-[80%] transition duration-200 ease-in-out bg-[#138bfb] hover:bg-[#0471d8] text-white font-bold py-2 px-4 rounded-md'
                                        onClick={() => handleDonation(1000)}>
                                        Donate
                                    </button>
                                </div>
                            </div>
                            <div
                                className="flex flex-col rounded-lg bg-white shadow-[0_2px_12px_-3px_rgba(0,0,0,0.1),0_10px_15px_-2px_rgba(0,0,0,0.05)] dark:bg-white md:max-w-xl md:flex-row">
                                <div className="flex flex-col justify-center items-center p-6">
                                    <h5
                                        className="mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-800">
                                        Donation of $5.000
                                    </h5>
                                    <button className='w-[80%] transition duration-200 ease-in-out bg-[#138bfb] hover:bg-[#0471d8] text-white font-bold py-2 px-4 rounded-md'
                                        onClick={() => handleDonation(5000)}>
                                        Donate
                                    </button>
                                </div>
                            </div>
                            <div
                                className="flex flex-col rounded-lg bg-white shadow-[0_2px_12px_-3px_rgba(0,0,0,0.1),0_10px_15px_-2px_rgba(0,0,0,0.05)] dark:bg-white md:max-w-xl md:flex-row">
                                <div className="flex flex-col justify-center items-center p-6">
                                    <h5
                                        className="mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-800">
                                        Donation of $10.000
                                    </h5>
                                    <button className='w-[80%] transition duration-200 ease-in-out bg-[#138bfb] hover:bg-[#0471d8] text-white font-bold py-2 px-4 rounded-md'
                                        onClick={() => handleDonation(10000)}>
                                        Donate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : (
                    <div className=" flex flex-col text-black h-screen justify-center items-center bg-[url(images/donate-image2.png)] bg-no-repeat bg-cover">
                        <div className='bg-neutral-700 bg-no-repeat bg-cover drop-shadow-md min-h-[50%] rounded-[2rem] flex flex-col justify-center items-center mx-4'>
                            <div className='flex flex-col items-center'>
                                <p className='text-center font-extrabold text-white text-[2rem] m-4'>
                                    Want to donate ${amount}?
                                </p>
                                <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }} customization={customization} />
                                <button className='transition duration-200 ease-in-out bg-[#fb1316] hover:bg-[#ae0d0f] text-white font-bold py-2 px-4 rounded-[1rem] ' onClick={() => setPreferenceId(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
};
export default Donation;
