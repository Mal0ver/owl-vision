import cls from "./Books.module.scss";

import Books_card from "../../Components/Books_card/Books_card";

import img1 from "../../Img/1.jfif";
import img2 from "../../Img/2.jfif";
import img3 from "../../Img/3.jfif";
import img4 from "../../Img/4.jfif";
import img5 from "../../Img/5.jfif";
import img6 from "../../Img/6.jfif";
import img7 from "../../Img/7.jfif";
import img8 from "../../Img/8.jfif";
import img9 from "../../Img/9.jfif";
import { useParams } from "react-router-dom";


const img_arr = [
    {
        img: img2,
        id: 2,
        bill: '9.90',
        title: 'Путь программиста'
    },
    {
        img: img3,
        id: 3,
        bill: '2.90',
        title: 'Выразительный JavaScript'
    },
    {
        img: img4,
        id: 4,
        bill: '1.25',
        title: 'Python для детей'
    },
    {
        img: img5,
        id: 5,
        bill: '2.20',
        title: 'Грокаем алгоритмы'
    },
    {
        img: img6,
        id: 6,
        bill: '1.15',
        title: 'JavaScript для детей'
    },
    {
        img: img7,
        id: 7,
        bill: '3.00',
        title: 'Программист фанатик'
    },
    {
        img: img8,
        id: 8,
        bill: '5.50',
        title: 'Чистый python'
    },
    {
        img: img9,
        id: 9,
        bill: '8.10',
        title: 'PHP'
    },

]
console.log(img_arr);


const Books = () =>{

    return(
        <div className={cls.root}>
            <div className={cls.container}>

                {
                    img_arr.map(({img,id, bill, title}) =>{
                        return(
                            <Books_card imgs={img} key={id} price={bill} title={title} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Books;