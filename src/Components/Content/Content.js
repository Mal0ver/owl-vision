import cls from "./Content.module.scss";

import { Switch, Route, Redirect, Router } from "react-router-dom";

import SideBar from "../SideBar/SideBar";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import Books from "../../Pages/Books/Books";
import Audio_books from "../../Pages/Audio Books/Audio_books";
import Documentation from "../../Pages/Documentation/Documentation";
import Video from "../../Pages/Video Lessons/Video";



const Content = () =>{
    return(
        <div className={cls.root}>
            <div className={cls.sidebar}>
                <SideBar />
            </div>
            <div className={cls.content}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/books' component={Books} />
                    <Route path='/audio_books' component={Audio_books} />
                    <Route path='/video' component={Video} />


                    <Route path='/error' exact component={Error} />
                    <Redirect to='/error' />

                </Switch>
            </div>
        </div>
    )
}

export default Content;