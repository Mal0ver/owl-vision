import cls from "./home.module.scss";
import { Link } from "react-router-dom";

import { GiCowled } from 'react-icons/gi';

// import mockup_img from "../../Img/illu_2x_pngby_Matus.png";

const Home = () =>{
    return(
        <div className={cls.root}>
            <div className={cls.mockup}></div>

            <div className={cls.wellcome_block}>  
                <h1>Wellcome to <GiCowled className={cls.logo_icon} /> <span>[Owl Vision]</span><Link to='/books' className={cls.a}>Start to develop</Link></h1>
            </div>
        </div>
    )
}

export default Home;