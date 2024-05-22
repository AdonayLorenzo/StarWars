import React from 'react';
import './Sign-In.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


function SignIn() {
    return (
        <>
            <Header />
            <div className="sign-in-form">
            <div className='form'>
                <h1>Wellcome again to the Resistance</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className='form-items' type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className='form-items' type="password" id="password" name="password" required />
                    </div>
                    <button className='form-button' type="submit">Sign In</button>
                </form>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default SignIn;
