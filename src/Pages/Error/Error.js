import cls from "./Error.module.scss";

import Error_img from "../../Img/iPhone Wallpaper.jfif";


const Error = () =>{
    return(
        <div className={cls.root}>
            <img src={Error_img} />
        </div>
    )
}

export default Error;