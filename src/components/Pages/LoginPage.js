import '../../css/LoginPage.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

const url = 'http://localhost:7000/';

function LoginPage() {
    const navigator = useNavigate();

    function Login(event){
        event.preventDefault();
        let name = document.getElementById('name').value;
        let password = document.getElementById('password').value;
        let elem = document.getElementById('login');
        if(password===''||name===''){
            elem.textContent = 'Invalid data';
            elem.style.color = 'crimson';
            return;
        }

        axios.post(url,{
            'name':name,
            'password':password
        }).then((resp)=>{
            if(resp.data.message==='Success'){
                navigator("/budgets");
            }
            else{
                elem.textContent = resp.data.message;
                elem.style.color = 'crimson';
            }
        })
    }

    return (
        <div className="center">
            <h1 id="login">Login</h1>
            <form className="main">
                <div className="data">
                    <input id='name'type="text" placeholder=" " autoComplete="on"/>
                    <span></span>
                    <label>UserName</label>
                </div>
                <div className="data">
                    <input id="password" type="password" placeholder=" " autoComplete="on"/>
                    <span></span>
                    <label>Password</label>
                </div>

                <input type="submit" value ="Login" onClick={Login}/>
                <div className="signup"> First time here ? 
                    <Link to='/signup'>Register</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;