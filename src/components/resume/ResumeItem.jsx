export default function ResumeItem({
    universityOrPosition,
    aducationOrJob,
    description,
    img,
}) {
    return (
        <li>
            <div className='resume__item'>
                <div className='resume__item-head'>
                    <div className='resume__item-icon'>
                        <img src={img} alt='university' />
                    </div>
                    <h4 className='title title__fz14'>
                        {universityOrPosition}
                    </h4>
                    <div className='resume__item-location'>
                        {aducationOrJob}
                    </div>
                </div>
                <div className='resume__item-body'>{description}</div>
            </div>
        </li>
    );
}
