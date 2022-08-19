import OutlineBtn from "../Btn/OutlineBtn";

import demo from '../../img/bx-window.svg';
import code from '../../img/bxl-github.svg';

const ProjecItemRes = ({title, img, description, stack1, stack2, stack3, stack4, demoLink, codeLink}) => {
    return (
        <div className="project__small__item__container">
            <div className='project__small__image__container'>
                <img className="project__small__image object-cover" src={img} alt={title} />
            </div>
            <div className="project__small__text__container">
                <h3 className="project__small_item__title">
                    {title}
                </h3>
                <p className="project__small__item__description">
                {description}
                </p>
                <div className="project__small__stack__container">
                    <img className="project__small__stack__icon" src={stack1} alt="" />
                    <img className="project__small__stack__icon" src={stack2} alt="" />
                    <img className="project__small__stack__icon" src={stack3} alt="" />
                    <img className={`project__small__stack__icon ${stack4 ? '' : 'hidden'}`} src={stack4} alt="" />
                </div>
                <div className='project__small_buttons__container'>
                    <OutlineBtn 
                    target={true}
                    text={'Demo'} to={demoLink} icon={demo} 
                    heigth={'h-8 andxs:h-9 andxs:h-10 bigmd:h-11 tabmd:h-12 tablg:h-14'} 
                    width={'max-w-full w-76 andxs:w-80 bigmd:w-88 tabxs:w-1/2'} 
                    iconWidth={'tabmd:w-6 tablg:w-7'} iconMargin={'biglg:mr-2 tabsm:mr-2 tabmd:mr-2 tablg_mr-3'}
                    fontSize={'biglg:text-base tabsm:text-lg tabmd:text-xl tablg:text-xxl'}
                    margin={'mb-4 tabxs:mx-4 tablg:mx-2 bigmd:mb-6'} />
                    <OutlineBtn 
                    target={true}
                    text={'Code'} to={codeLink} icon={code} 
                    heigth={'h-8 andxs:h-9 andxs:h-10 bigmd:h-11 tabmd:h-12 tablg:h-14'} 
                    iconWidth={'tabmd:w-6 tablg:w-7'} iconMargin={'biglg:mr-2 tabsm:mr-2 tabmd:mr-2 tablg_mr-3'}
                    fontSize={'biglg:text-base tabsm:text-lg tabmd:text-xl tablg:text-xxl'}
                    width={'max-w-full w-76 andxs:w-80 bigmd:w-88 tabxs:w-1/2'}
                    margin={'tabxs:mx-4 tablg:mx-2'} />
                </div>
            </div>
        </div>
    )
}

export default ProjecItemRes;