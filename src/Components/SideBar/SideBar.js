import cls from "./SideBar.module.scss";
import { GiCowled } from 'react-icons/gi';
import { ImBooks } from 'react-icons/im';
import { FaFileAudio } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';
import { HiDocument } from 'react-icons/hi';
import { BsFillBellFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { ImExit } from 'react-icons/im';

import { NavLink } from "react-router-dom";

import {fire} from '../../Services/firebase'
const SideBar = () =>{

    const signOut = (e) =>{
        e.preventDefault();
        fire.auth.signOut();
    }

    return(
        <div className={cls.root}>
            <div className={cls.logotype}>
                <div className={cls.logo_box}>
                    <NavLink to='/'><GiCowled className={cls.logo_icon} /></NavLink>
                </div>
                <h3> [Owl Vision]</h3>
            </div>

            <div className={cls.navigation}>
                <NavLink to='/books' className={cls.a}><ImBooks className={cls.nav_icon} /> Books</NavLink>
                <NavLink to='/audio_books' className={cls.a}><FaFileAudio className={cls.nav_icon} /> Audio Books</NavLink>
                <NavLink to='/video' className={cls.a}><FaPhotoVideo className={cls.nav_icon} /> Video lessons</NavLink>
            </div>

            <div className={cls.navigation}>
                <NavLink to='/' className={cls.a}><BsFillBellFill className={cls.nav_icon} /> Notifications</NavLink>
                <NavLink to='/' className={cls.a}><AiFillSetting className={cls.nav_icon} /> Settings</NavLink>
                <a className={cls.a} onClick={signOut}><ImExit className={cls.nav_icon} /> Sign out</a>

            </div>
        </div>
    )
} 

export default SideBar;