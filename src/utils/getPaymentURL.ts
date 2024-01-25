import { Buffer } from "buffer";
window.Buffer = window.Buffer || require("buffer").Buffer;

export const getPaymentURL = async () => {
    const params = JSON.stringify({
        checkout: {
            test: true,
            transaction_type: "payment",
            attempts: 3,
            settings: {
                // success_url: `${process.env.REACT_APP_FRONT_PROD}success`,
                success_url: `http://localhost:3000/success`,
                decline_url: `${process.env.REACT_APP_FRONT_PROD}error`,
                fail_url: `${process.env.REACT_APP_FRONT_PROD}error`,
                cancel_url: `${process.env.REACT_APP_FRONT_PROD}error`,
                auto_return: "0",
                button_text: "Оплатить",
                button_next_text: "Вернуться в магазин",
                language: "ru",
            },
            order: {
                currency: "BYN",
                amount: process.env.REACT_APP_GENERAL_PRICE,
                description: "Order description",
            },
        },
    });

    try {
        const res = await fetch(`${process.env.REACT_APP_BEPAID}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization:
                    "Basic " +
                    Buffer.from(
                        `${process.env.REACT_APP_SHOP_ID}:${process.env.REACT_APP_SHOP_SECRET_KEY}`,
                    ).toString("base64"),
            },
            body: params,
        });

        const data = await res.json();

        return await data.checkout;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
