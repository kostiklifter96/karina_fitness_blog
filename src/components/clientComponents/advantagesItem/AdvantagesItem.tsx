import { IAdvantages } from "types/types";

export default function AdvantagesItem({ description }: IAdvantages) {
    return (
        <li>
            <div className='advantages__item'>
                <div className='advantages__item-head'>
                    <div className='advantages__item-icon'>
                        {/* <img src={img} alt='university' /> */}
                    </div>

                    <div className='advantages__item-location'>
                        {description}
                    </div>
                </div>
            </div>
        </li>
    );
}
