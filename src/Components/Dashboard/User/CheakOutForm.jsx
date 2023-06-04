import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
// import './Css/Common.css'

const CheakOutForm = ({ price, cards }) => {
    // console.log(card, price);
    const { user } = useAuth()
    const [error, CardError] = useState(' ');
    const [clientSecret, setClientSecret] = useState('')
    const [proccesing, setProccessing] = useState(false);
    const [transactionId, setTranjectionId] = useState(' ')
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        if (price) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(data => {
                    // console.log(data.data.clientSecret);
                    setClientSecret(data.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            console.log('error', error);
            CardError(error.message)
        } else {
            CardError('')
            // console.log('payemnt method', paymentMethod);
        }
        setProccessing(true)
        setTranjectionId()
        const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "unknown",
                    name: user?.displayName || 'anonymous',
                },
            },
        }
        );
        if (confirmErr) {
            console.log(confirmErr);
        }

        console.log(paymentIntent);
        setProccessing(false)

        if (paymentIntent.status === "succeeded") {
            setTranjectionId(paymentIntent.id)
            // TODO next steps
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date:new Date(),
                quantity: card.length,
                cardItems: cards.map(m => m._id),
                menuItems: cards.map(m => m.menuItemId),
                itemNames: cards.map(m => m.name),
                status: 'service pending'
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirm
                    }
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-warning m-8 btn-outline btn-md" type="submit" disabled={!stripe || !clientSecret || proccesing}>
                    Pay
                </button>
            </form>
            {
                error && <p className="text-red-500">{error}</p>
            }
            {
                transactionId && <p className="text-green-500">Transaction complete with transactionId : {transactionId}</p>
            }
        </>
    );
};

export default CheakOutForm;