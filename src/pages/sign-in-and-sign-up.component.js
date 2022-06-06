import React from 'react'
import './sign-in-and-sign-up.style.css'
import SignIn from '../components/sign-in.component'
import SignUp from '../components/sign-up.component'

const SignInAndSignUpPage = () =>{
return(
    <div className="sign-in-and-sign-up">
<SignIn/>
<SignUp/>
    </div>
)
}
export default SignInAndSignUpPage;