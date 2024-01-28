import { IListQuestions } from "types/types";
import { data } from "../../../data/data";
import { ItemListQuestions } from "./ItemListQuestions";
import "./listQuestions.scss";

const list: IListQuestions[] = data[0].listQuestions;

export const ListQuestions = () => {
    return (
        <section className='listQuestions' id='listQuestions'>
            <div className='container'>
                {/* <h2 className='title title__fz16 title__section-title'>
                    Вопросы
                </h2> */}
                <div className='title title__fz36 title__section-subtitle'>
                    Вопрос-ответ
                </div>
                <div className='dividerr'></div>

                <div className='listQuestions__items'>
                    {list?.map((itemQuestion: IListQuestions) => (
                        <ItemListQuestions
                            key={itemQuestion.id}
                            {...itemQuestion}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
