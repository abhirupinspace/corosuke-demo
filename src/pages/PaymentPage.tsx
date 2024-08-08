import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import QRCode from "react-qr-code";

const PaymentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const walletAddress = '0x45395f9Ea68ED3b271AbDC5DA72bC3FB3e8B0e71';

  return (
    <main>
      <Navbar />
      <div className='flex justify-center items-center min-h-screen'>
        <button
          className='h-14 w-40 bg-orange-600 text-white text-xl rounded-lg'
          onClick={() => setModalOpen(true)}
        >
          Pay Now
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-8 rounded-lg'>
            <button
              className='absolute top-2 right-2 text-xl font-bold'
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <h2 className='text-xl text-black font-bold mb-4'>Scan QR to Pay Now</h2>
            <QRCode value={walletAddress} size={256} />
            <p className='text-black mt-4 text-center'>{walletAddress}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default PaymentPage;
