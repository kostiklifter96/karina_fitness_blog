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
                    {/* &#129095; */}
                    <svg
                        width='10px'
                        height='10px'
                        viewBox='0 0 1024 1024'
                        className='icon'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z'
                            fill='#000000'
                        />
                    </svg>
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
