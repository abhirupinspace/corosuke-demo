import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import QRCode from "react-qr-code";

const PaymentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setWalletAddress(inputValue);
    setModalOpen(true);
  };

  return (
    <main>
      <Navbar />
      <div className=" bg-bgimg bg-cover bg-fixed bg-center bg-no-repeat h-full w-full">
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <h1 className='text-2xl font-semibold text-black'>Follow the steps to test the payment CORE</h1>
          <li>Type the wallet address</li>
          <li>Scan the QR from your Metamask wallet</li>
          <li>Pay using tCORE</li>
          <form onSubmit={handleSubmit} className='p-10 mb-4'>
            <input
              type='text'
              placeholder='Enter wallet address'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='h-14 w-80 px-4 py-2 border text-black border-gray-300 rounded-lg text-xl'
            />
            <button
              type='submit'
              className='h-14 w-40 bg-black text-white text-xl rounded-lg ml-4'
            >
              Pay Now
            </button>
          </form>
          <a href="https://scan.test.btcs.network/faucet" target='_blank'>Get tCORE faucet from here</a>
          {/* Modal */}
          {modalOpen && (
            <div className='fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-8 rounded-lg relative'>
                <button
                  className='absolute top-2 right-2 text-xl font-bold'
                  onClick={() => setModalOpen(false)}
                >
                  &times;
                </button>
                <h2 className='text-xl text-black font-bold mb-4'>Scan QR from Metamask</h2>
                <QRCode value={walletAddress} size={256} />
                <p className='text-black mt-4 text-center'>{walletAddress}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
