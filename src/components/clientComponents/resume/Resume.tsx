import { IResume } from "types/types";
import { data } from "../../../data/data";
import ResumeItem from "./ResumeItem";
import "./resume.scss";

const resume: IResume[] = data[0].resume;

export const Resume = () => {
    return (
        <section className='resume' id='resume'>
            <div className='container'>
                <div className='title title__fz36 resume__title'>Обо мне</div>
                <h3 className='title title__fz19 resume__title'>
                    Твой тренер Карина Наумова
                </h3>{" "}
                <div className='divider'></div>
                <div className='resume__wrapper'>
                    <div className='resume__column'>
                        <ul>
                            {resume?.map((el: IResume) => (
                                <ResumeItem key={el.id} {...el} />
                            ))}
                        </ul>
                    </div>
                    <div className='resume__column'>
                        {/* <h3 className='title title__fz20 resume__column-title'>
                            Опыт работы
                        </h3> */}
                        {/* <ul>
                            {secondColumn?.map((el: IResume) => (
                                <ResumeItem key={el.id} {...el} />
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
