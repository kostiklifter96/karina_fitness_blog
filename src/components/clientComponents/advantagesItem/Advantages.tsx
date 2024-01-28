import { IAdvantages } from "types/types";
import { data } from "../../../data/data";
import AdvantagesItem from "./AdvantagesItem";
import "./advantages.scss";

const advantages: IAdvantages[] = data[0].advantages;

export const Advantages = () => {
    return (
        <section className='advantages' id='advantages'>
            <div className='container'>
                <div className='title title__fz36 advantages__title'>
                    Преимущества
                </div>
                <div className='dividerr'></div>
                <div className='advantages__wrapper'>
                    <div className='advantages__column'>
                        <ul>
                            {advantages?.map((el: IAdvantages) => (
                                <AdvantagesItem key={el.id} {...el} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
