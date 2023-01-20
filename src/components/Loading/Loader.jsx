import React from "react";
import { Triangle } from "react-loader-spinner";

export const Loading = ({ loading }) => {
    return (
        <div className='contacts__loading'>
            <Triangle
                color='#426dc2'
                height={250}
                width={250}
                visible={loading}
            />
        </div>
    );
};
