import React from 'react'
import './sign-in.style.scss'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(event)=>{
        const {name,value}=event.target
        this.setState({[name]:value})
    }

    handleSubmit=(event)=>{
        event.peventDefault()
    }
    render(){
        return(
                <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <input name='email' placeholder='email' type='email' onChange={this.handleChange}/>
                        <input name='password' placeholder='password' type='pssword' onChange={this.handleChange}/>
                        <input value='submit form' type='submit'/>
                    </form>
                </div>
        )

    }
}

export default SignIn