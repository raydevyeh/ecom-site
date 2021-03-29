import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        this.state = {
            email: '',
            password: '',
        }
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <input name='email' value={this.state.email} required />
                    <Label>Email</Label>
                    <input name='password' value={this.state.password} required />
                    <Label>Password</Label>
                    
                </form>
            </div>
        )
    }
}