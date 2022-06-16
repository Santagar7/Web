//import '../../css/LoginPage.css';
import {Link, useNavigate} from "react-router-dom";
import React from 'react';
import axios from "axios";

const url = 'http://localhost:7000/';

function SignUpPage() {
    let navigator = useNavigate();
    function SignUp(event){
        event.preventDefault();
        let name = document.getElementById('name').value;
        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let repeat_password = document.getElementById('repeat_password').value;

        let elem = document.getElementById('register');

        if((email.match(/@/g) || []).length!==1){
            elem.textContent = 'Invalid Email';
            elem.style.color = 'crimson';
            return;
        }
        if(password!==repeat_password){
            elem.textContent = 'Passwords should match';
            elem.style.color = 'crimson';
            return;
        }
        if(password.length<8){
            elem.textContent = 'Password is too short';
            elem.style.color = 'crimson';
            return;
        }
        if(password.replace(/[a-z]/gi, '').length<2){
            elem.textContent = 'Password not safe enough';
            elem.style.color = 'crimson';
            return;
        }

        axios.post(url+'register',{
            'name':name,
            'firstname':firstname,
            'lastname':lastname,
            'password':password,
            'email':email,
            'repeat_password':repeat_password
        }).then((resp)=>{
            if(resp.data.message==='Success'){
                navigator("/");
            }
            else{
                elem.textContent = resp.data.message;
                elem.style.color = 'crimson';
            }
        })
    }

    return (
        <div className="center">
                <h1 id="register">Registration</h1>
                <form className="main">
                    <div className="data">
                        <input type="text" id="name"  data-testid='name' placeholder=" " autoComplete="on"/>
                        <span/>
                        <label>Name</label>
                    </div>
                    <div className="data">
                        <input type="password" id="password"  data-testid='password' placeholder=" " autoComplete="on"/>
                        <span/>
                        <label>Password</label>
                    </div>
                    <div className="data">
                        <input type="password" id="repeat_password"  data-testid='repeat_password' placeholder=" " autoComplete="on"/>
                        <span/>
                        <label>Repeat Password</label>
                    </div>
                    <div className="data">
                        <input type="text" id="firstname"  data-testid='firstname' placeholder=" " autoComplete="on"/>
                        <span/>
                        <label>FirstName</label>
                    </div>
                    <div className="data">
                        <input type="text" id="lastname"  data-testid='lastname' placeholder=" " autoComplete="on"/>
                        <span/>
                        <label>LastName</label>
                    </div>
                    <div className="data">
                        <input type="text" id="email"  data-testid='email' placeholder=" " autoComplete="on"/>
                        <span/>
                        <label>Email</label>
                    </div>

                    <input type="submit" value="Submit"  data-testid='submit' onClick={SignUp}/>
                    <div className="signup">
                        <h4>Already have an account ?  <Link to='/'>Log in</Link></h4>
                    </div>
                </form>
            </div>
    );
}

export default SignUpPage;