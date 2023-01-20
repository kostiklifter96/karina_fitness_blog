export const SkillsRaitingList = ({ title, level }) => {
    return (
        <div className='skills__ratings-item'>
            <div className='title title__fz14 skills__ratings-title'>
                {title}
            </div>
            <div className='skills__ratings-counter'>{level}</div>
            <div className='skills__ratings-line'>
                <span style={{ width: level }}></span>
            </div>
        </div>
    );
};
