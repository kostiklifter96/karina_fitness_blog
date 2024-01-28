import { IProgram } from "types/types";

export const ProgramItem = ({ title, description, img }: IProgram) => {
    return (
        <div className='program__item'>
            {/* <div className='program__item-img'>
                <img src={img} alt={title} />
            </div> */}
            <h3 className='title title__fz20 '>{title}</h3>
            <p className='title title__fz12' style={{ whiteSpace: "pre-line" }}>
                {description}
            </p>
        </div>
    );
};
