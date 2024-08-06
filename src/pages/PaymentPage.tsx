import React, { useState } from 'react';
import { createThirdwebClient, getContract, resolveMethod, defineChain, prepareContractCall } from 'thirdweb';
import { useSendTransaction } from 'thirdweb/react';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';
import Navbar from '../../components/Navbar';

const client = createThirdwebClient({
    clientId: '0d5c7946f995df5db9cfe5657c9d1755',
});

const contract = getContract({
    client,
    chain: defineChain(1115),
    address: '0xB5100753Ab4E68fc5e12cc6a1cF587586EB7B26B',
});

const PaymentPage: React.FC = () => {
    const [recipient, setRecipient] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const { mutate: sendTransaction } = useSendTransaction();

    const handlePayment = async () => {
        try {
            setStatus('Processing payment...');
            const transaction = prepareContractCall({
                contract,
                method: 'transfer',
                params: [recipient, parseInt(amount)],
            });
            await sendTransaction(transaction);
            setStatus('Payment successful!');
        } catch (error) {
            setStatus('Payment failed. Please try again.');
            console.error(error);
        }
    };

    return (
        <main className="bg-fixed bg-center bg-bgimg fixed h-full w-full">
            <Container>
                <Typography variant="h4" gutterBottom>
                    Corosuke Payment Gateway
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Send payments securely using CORE tokens.
                </Typography>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        label="Recipient Address"
                        variant="outlined"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        label="Amount (CORE)"
                        variant="outlined"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePayment}
                        disabled={!recipient || !amount}
                    >
                        Make Payment
                    </Button>
                </div>
                {status && (
                    <div className="mt-4">
                        <Typography variant="body2" color="textSecondary">
                            {status}
                        </Typography>
                    </div>
                )}
            </Container>
        </main>
    );
};

export default PaymentPage;
