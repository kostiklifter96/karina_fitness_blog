import React from "react";
import { useState } from "react";

export const ItemListQuestions = ({ itemQuestion }) => {
    const [active, setActive] = useState(false);
    return (
        <div onClick={() => setActive(!active)} className='listQuestions__item'>
            <div className='listQuestions__item-questions'>
                <div className='title title__fz16'>{itemQuestion.title}</div>
                <div
                    className={
                        active
                            ? "listQuestions__item-questions active__arrow"
                            : "listQuestions__item-questions-arrow"
                    }
                >
                    &#129095;
                </div>
            </div>

            <div
                className={
                    active
                        ? "listQuestions__item active__description"
                        : "listQuestions__item-description"
                }
            >
                <div>
                    <p>{itemQuestion.description}</p>
                </div>
            </div>
        </div>
    );
};
