import BigCircle from '../Home/BrownBox/BigCircle.js'
import React, { useEffect, useState } from "react";
import {
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


function Sub() {

    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // change to Finish URl
                return_url: "https://curious-chronicles.herokuapp.com/Success",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    const stripePromise = loadStripe("pk_test_51NGW5hGa0dfhEuOuwIeTm5qdHGSsUA2bk6fgFyDixDKGA8GnqaQYAtJcmbQkwfsRbwAaZjbhP61IXtwkhKiHksbP00i5Iugqla");




    // const [page, setPage] = useState("splash");
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    return (


        <div>
            <div className="background marginSub row">
                <div className='greyBox'>

                    <BigCircle />
                    <h2>Basic</h2>
                    <ul >
                        <li>-10 themes</li>
                        <li>-Manual Backups</li>
                        <li>-All Pre-made
                            Prompts </li>
                    </ul>
                </div>
                <div className='yellowBox'>

                    <BigCircle />
                    <h2 className='titleSub'>Hero</h2>
                    <ul>
                        <li>-All themes</li>
                        <li>-Automatic Backups</li>
                        <li>-Advanced Statistics </li>
                        <li>-Custom Prompts </li>
                    </ul>
                    <h5>$12 / month</h5>
                    <form action="/create-checkout-session" method="POST">
                        <Elements options={options} stripe={stripePromise}>
                            <LinkAuthenticationElement
                                id="link-authentication-element"
                                onChange={(e) => setEmail(e.target.value)} />
                            <PaymentElement id="payment-element" options={paymentElementOptions} />
                        </Elements>
                        <button disabled={isLoading || !stripe || !elements} id="submit">
                            <span id="button-text">
                                {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                            </span>
                        </button>
                        {/* Add a hidden field with the lookup_key of your Price */}
                        <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
                        <button id="checkout-and-portal-button" type="submit" className='BtnRed'>Join</button>
                    </form>
                </div>
            </div>
            <a href='/GrownupArea'>

                <button className="BtnBrown">Leave</button>
            </a>

        </div>
    );
}
export default Sub;