import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../SectionTitle";
import CheakOutForm from "./CheakOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "../../Hooks/useCart";

// TODO : provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gteway_pk);
const PayementHistory = () => {
    const [card] = useCart();
    const total = card.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-3/4 mx-auto">
            <SectionTitle subHeading="procces  to payment" heading='Payment'></SectionTitle>
            <h2 className="text-3xl text-center">Pament </h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheakOutForm price={price} cards={card}></CheakOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PayementHistory;