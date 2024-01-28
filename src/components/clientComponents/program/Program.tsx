import { MarqueeComponent } from "components/index";
import { changeStatusRegistationClient } from "store/reducer/adminReducer";
import { useAppDispatch } from "store/store";
import { IProgram } from "types/types";
import { data } from "../../../data/data";
import { ProgramItem } from "./ProgramItem";
import "./program.scss";

const skills: IProgram[] = data[0].skills;

export const Program = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            {" "}
            <section className='program'>
                <div className='container' id='program'>
                    <div className='title title__fz36 title__section-subtitle'>
                        В онлайн абонемент входит:
                    </div>
                    <div className='dividerr'></div>

                    <div className='program__items'>
                        {skills?.map((item) => (
                            <ProgramItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
                <div className='program__btn'>
                    <button
                        className='btn'
                        onClick={() =>
                            dispatch(changeStatusRegistationClient(true))
                        }
                    >
                        Оплатить
                    </button>
                </div>
            </section>
            <MarqueeComponent speed={120}>
                <div className='marq__block'>
                    <div>
                        <span>&#10140; </span>Если у вас нет времени на поездки
                        в зал{" "}
                    </div>
                    <div>
                        <span>&#10140; </span>Если вы стесняетесь лишних
                        взглядов в зале
                    </div>
                    <div>
                        <span>&#10140; </span>Если вы молодая мама и готовы
                        вернуть свое тело
                    </div>
                    <div>
                        <span>&#10140; </span>Если у вас сидячая работа
                    </div>
                </div>
            </MarqueeComponent>
        </>
    );
};
