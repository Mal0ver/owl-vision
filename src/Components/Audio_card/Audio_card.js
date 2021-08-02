import cls from "./Audio_card.module.scss";

import { FaHeadphonesAlt } from 'react-icons/fa';


import { AiFillHeart } from 'react-icons/ai';

const Audio_card = ({imgs, price, title}) =>{
    return(
        <div className={cls.root}>
            <div className={cls.audio_img}>
                <img src={imgs} />
                <FaHeadphonesAlt className={cls.audio_icon} />
            </div>
            <div className={cls.info}>
                <div className={cls.text}>
                    <h3>{title}</h3>
                </div>
                <div className={cls.like}>
                    <AiFillHeart />
                </div>
            </div>
            <div className={cls.price}>
                <a>Download</a>
            </div>
        </div>
    )
}

export default Audio_card;