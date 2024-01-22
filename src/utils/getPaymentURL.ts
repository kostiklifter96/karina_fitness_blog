import { Buffer } from "buffer";
window.Buffer = window.Buffer || require("buffer").Buffer;

export const getPaymentURL = async (sum: number) => {
    const params = JSON.stringify({
        checkout: {
            test: false,
            transaction_type: "payment",
            attempts: 3,
            settings: {
                success_url: `${process.env.REACT_APP_FRONT_PROD}success`,
                decline_url: `${process.env.REACT_APP_FRONT_PROD}error`,
                fail_url: `${process.env.REACT_APP_FRONT_PROD}error`,
                cancel_url: `${process.env.REACT_APP_FRONT_PROD}error`,
                auto_return: "0",
                button_text: "Оплатить",
                button_next_text: "Вернуться в магазин",
                notification_url: `${process.env.REACT_APP_BACKEND_PROD}payment`,
                language: "ru",
                customer_fields: {
                    visible: ["first_name", "last_name", "email"],
                },
            },
            order: {
                currency: "BYN",
                amount: sum,
                description: "Order description",
            },
        },
    });

    try {
        const res = await fetch(
            "https://checkout.bepaid.by/ctp/api/checkouts",
            {
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
            },
        );

        const data = await res.json();

        return await data.checkout.redirect_url;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};