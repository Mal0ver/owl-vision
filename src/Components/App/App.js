
import Routes from "../../Pages/Routes/Routes";
import {useAuthState} from 'react-firebase-hooks/auth'
import { fire } from "../../Services/firebase"
import Loading from "../Loader/Loader";


const App = () => {

    const [user, loading] = useAuthState(fire.auth());

    console.log(user);
    console.log(loading);

    if(loading){
        return(
            <Loading />
        )
    }
    return(
        <div>
            <Routes user={user}/>
        </div>
    )


};
export default App;