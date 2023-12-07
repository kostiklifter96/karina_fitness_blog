import { Triangle } from "react-loader-spinner";
import { ILoader } from "types/types";

export const Loading = ({ loading }: ILoader) => {
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
