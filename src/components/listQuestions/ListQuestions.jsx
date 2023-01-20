import React from "react";
import { data } from "../../data/data";
import { ItemListQuestions } from "./ItemListQuestions";

export const ListQuestions = () => {
    return (
        <section className='listQuestions' id='listQuestions'>
            <div className='container'>
                <h2 className='title title__fz16 title__section-title'>
                    Вопросы
                </h2>
                <div className='title title__fz36 title__section-subtitle'>
                    Вопрос-ответ
                </div>
                <div className='divider'></div>

                <div className='listQuestions__items'>
                    {data[0].listQuestions?.map((itemQuestion) => (
                        <ItemListQuestions
                            key={itemQuestion.id}
                            itemQuestion={itemQuestion}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
