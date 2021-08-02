import Books from "../../Pages/Books/Books";
import cls from "./Books_card.module.scss";
import book_img from '../../Img/1.jfif'

import { AiFillHeart } from 'react-icons/ai';

const Books_card = ({imgs, key, price, title}) =>{
    return(
        <div className={cls.root}>
            <div className={cls.books_img}>
                <img src={imgs} />
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

export default Books_card;