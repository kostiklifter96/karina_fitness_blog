import { useState } from "react";
import { getCurrentPrice } from "store/reducer/clientReducer";
import { useAppDispatch } from "store/store";
import { ErrorMessage } from "types/types";

interface IResponse {
    success: boolean;
    message: string;
}

export const usePromoCodeActivation = () => {
    const [promoCode, setPromoCode] = useState("");
    const [emailForPromo, setEmailForPromo] = useState("");
    const [loadingPromoCode, setLoadingPromoCode] = useState(false);
    const [couponError, setCouponError] = useState<ErrorMessage | "">("");

    const dispatch = useAppDispatch();

    const fetchPromoCode = async () => {
        try {
            if (emailForPromo && promoCode.length > 2) {
                setLoadingPromoCode(true);
                const res = await fetch(
                    `${process.env.REACT_APP_BACKEND_PROD}promocode?apikey=${process.env.REACT_APP_API_KEY}`,
                    // `http://localhost:4999/promocode?apikey=${process.env.REACT_APP_API_KEY}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            code: promoCode,
                            email: emailForPromo,
                        }),
                    },
                );

                const data: IResponse = await res.json();

                if (data.success) {
                    dispatch(getCurrentPrice(5900));
                    setLoadingPromoCode(false);
                    setCouponError("");
                } else {
                    setCouponError(ErrorMessage.clientOrCode);
                    dispatch(getCurrentPrice(6500));
                    setLoadingPromoCode(false);
                }
            }
            setLoadingPromoCode(false);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
                setLoadingPromoCode(false);
            }
        }
    };

    const onClickPromo = () => {
        if (emailForPromo && promoCode) {
            fetchPromoCode();
            setCouponError("");
        } else {
            dispatch(getCurrentPrice(6500));
            setCouponError(ErrorMessage.requiredField);
        }
    };

    return {
        setPromoCode,
        setEmailForPromo,
        promoCode,
        loadingPromoCode,
        onClickPromo,
        couponError,
    };
};
