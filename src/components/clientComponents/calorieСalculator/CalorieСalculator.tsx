import { useEffect, useState } from "react";
import { changeStatusRegistationClient } from "store/reducer/adminReducer";
import { useAppDispatch } from "store/store";
import "./calorieСalculator.scss";

const option = [
    {
        value: 1.2,
        description: "Минимальная (нет физических нагрузок, сидячая работа)",
    },
    {
        value: 1.375,
        description: "Низкая (нагрузка до 45 мин 1-3 раза в неделю)",
    },
    {
        value: 1.55,
        description:
            "Умеренная (тренировка не менее 30-60 мин 1-4 раза в неделю)",
    },
    {
        value: 1.7,
        description: "Тяжелая (занятия спортом 5-7 раз в неделю от 60 мин)",
    },
    {
        value: 1.9,
        description:
            "Экстремальная ( Тренировки от 60 мин 2 раза в день 6-7 дней в неделю )",
    },
];
export const CalorieСalculator = () => {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [age, setAge] = useState<number>(0);
    const [activeLevel, setActivLevel] = useState<number>(0);
    const [resCal, setResCal] = useState<number>(0);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (weight && height && age && activeLevel) {
            const res =
                (10 * weight + 6.25 * height - 5 * age - 161) * activeLevel;
            setResCal(Math.round(res));
        }
    }, [activeLevel, age, height, weight]);

    return (
        <>
            <section className='calorieСalculator' id='calorieСalculator'>
                <div className='container'>
                    <div className='title title__fz36 timer__title'>
                        Расчет калорий для девушек
                    </div>
                    <div className='divider'></div>
                    <div className='calorieСalculator__grid'>
                        <div className='calorieСalculator__grid-item'>
                            <input
                                type='number'
                                className='calorieСalculator__grid-item-num'
                                onChange={(e) => setWeight(+e.target.value)}
                            />
                            <div className='calorieСalculator__grid-item-description'>
                                {"Вес, в кг"}
                            </div>
                        </div>
                        <div className='calorieСalculator__grid-item'>
                            <input
                                type='number'
                                className='calorieСalculator__grid-item-num'
                                onChange={(e) => setHeight(+e.target.value)}
                            />

                            <div className='calorieСalculator__grid-item-description'>
                                {"Рост, в см"}
                            </div>
                        </div>
                        <div className='calorieСalculator__grid-item'>
                            <input
                                type='number'
                                className='calorieСalculator__grid-item-num'
                                onChange={(e) => setAge(+e.target.value)}
                            />

                            <div className='calorieСalculator__grid-item-description'>
                                {"Возраст, лет"}
                            </div>
                        </div>
                        <div className='calorieСalculator__grid-item'>
                            <select
                                className='calorieСalculator__grid-item-num'
                                required
                                onChange={(e) => setActivLevel(+e.target.value)}
                            >
                                <option defaultValue=''></option>
                                {option?.map((el) => (
                                    <option
                                        key={el.description}
                                        value={el.value}
                                    >
                                        {el.description}
                                    </option>
                                ))}
                            </select>

                            <div className='calorieСalculator__grid-item-description'>
                                {"Активность"}
                            </div>
                        </div>
                    </div>
                    <div className='calorieСalculator__grid-result'>
                        <div className='calorieСalculator__grid-result-number'>
                            {resCal}
                        </div>
                        <div className='calorieСalculator__grid-result-description'>
                            {"Общий расход, в ккал"}
                        </div>
                    </div>{" "}
                    <div className='calorieСalculator__column'>
                        <ul>
                            <li>
                                <div className='calorieСalculator__item'>
                                    <div className='calorieСalculator__item-head'>
                                        <div className='calorieСalculator__item-icon'></div>
                                        <div className='calorieСalculator__item-location'>
                                            Если хотите похудеть, то от общего
                                            расхода калорий отнимайте 10-15%
                                        </div>
                                    </div>
                                </div>
                            </li>{" "}
                            <li>
                                <div className='calorieСalculator__item'>
                                    <div className='calorieСalculator__item-head'>
                                        <div className='calorieСalculator__item-icon'></div>

                                        <div className='calorieСalculator__item-location'>
                                            Если хотите набрать, то к общему
                                            расходу калорий добавляйте 10-15%
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='calorieСalculator__item'>
                                    <div className='calorieСalculator__item-head'>
                                        <div className='calorieСalculator__item-icon'></div>

                                        <div className='calorieСalculator__item-location'>
                                            Если вы на ГВ, то к общему расходу
                                            калорий добавляйте 250-400 ккал
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='calorieСalculator__btn'>
                        <button
                            className='btn'
                            onClick={() =>
                                dispatch(changeStatusRegistationClient(true))
                            }
                        >
                            Купить доступ
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
