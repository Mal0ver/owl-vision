import cls from "./Login.module.scss";
import { fire, provider } from "../../Services/firebase"


const Login = () =>{

    const signIn = e =>{
        e.preventDefault();

        fire.auth().signInWithPopup(provider)
        .then(res =>{
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return(
        <div className={cls.root}>
            <div className={cls.card}>
                <h5>Авторизация</h5>
                <button onClick={signIn}><img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' /></button>
            </div>
        </div>
    )
}

export default Login;