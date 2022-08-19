import OutlineBtn from '../Btn/OutlineBtn'
import demo from '../../img/bx-window.svg';
import code from '../../img/bxl-github.svg';

const ProjectItem = ({title, description, img, stack1, stack2, stack3, stack4, textAlign, align, spacing, demoLink, codeLink }) => {
    return (
        <div className="project__item__container">
            <div className={`project__item__img__container ${align ? 'order-1' : ''}`}>
                <img className='project__item__image object-cover' src={img} alt={title} />
            </div>
            <div className={`project__item__text ${textAlign} ${spacing} ${align ? 'mr-10' : 'ml-10'}`}>
                <h3 className="project__item__title">{title}</h3>
                <p className="project__item__description">
                    {description}
                </p>
                <div className={`project__stack__container ${align}`}>
                    <img className="project__stack__icon" src={stack1} alt="" />
                    <img className="project__stack__icon" src={stack2} alt="" />
                    <img className="project__stack__icon" src={stack3} alt="" />
                    <img className={`project__stack__icon ${stack4 ? '' : 'hidden'}`} src={stack4} alt="" />
                </div>
                <div className={`project__buttons__container ${align}`}>
                <OutlineBtn 
                    target={true}
                    text={'Demo'} to={demoLink} icon={demo} 
                    heigth={'h-10 desxxl:h-11'} 
                    width={'w-1/2 desmd:w-2/5 '} 
                    iconWidth={'w-6'} iconMargin={'desxs:mr-2'}
                    fontSize={'text-lg desxxl:text-xl'}
                    margin={'mx-0 mb-0 mr-3 desmd:mr-10'} 
                    animation='animated__button nav__links bg-btnColor'
                />
                <OutlineBtn 
                    target={true}
                    text={'Code'} to={codeLink} icon={code} 
                    heigth={'h-10 desxxl:h-11'} 
                    iconWidth={'w-6 '} iconMargin={'desxs:mr-2'}
                    fontSize={'text-lg desxxl:text-xl'}
                    width={'w-1/2 desmd:w-2/5'}  margin={'mx-0 mb-0'}
                    animation='animated__button nav__links bg-btnColor'
                />
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;