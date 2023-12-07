import Marquee from "react-fast-marquee";
import "./marqueeComponent.scss";

export const MarqueeComponent = ({
    children = "",
    className = "",
    speed,
    background = "",
    height = "",
}: {
    children?: React.ReactNode;
    className?: string;
    background?: string;
    speed: number;
    height?: string;
}) => {
    return (
        <div className='marquee'>
            <Marquee
                speed={speed}
                style={{ background: background, height: height }}
                className={`${className} `}
            >
                {children}
            </Marquee>
        </div>
    );
};
