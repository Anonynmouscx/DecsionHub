import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., authentication)
    // For now, let's log the email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home');
  };

  return (

    <div className="background">
      <div className="login-form ">

        <form onSubmit={handleLogin} className='log-form'>
          <h2 className="heading">Welcome to <br></br>Decision Hub</h2>
          <div className='description'>
            Default Email : <span className='sp'>abc@gmail.com</span><br></br>& Password : <span className='sp'>123</span>
          </div>
          <div className='form-group'>
            <label className="form-label">

              <input
                type="email"
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </label>
          </div>
          <div className='form-group'>
            <label className="form-label">

              <input
                type="password"
                value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </label>
          </div>

          <button type="submit" className='log-btn'>Login</button>
          <div className='end'>
            <p>By continuing you agree to
              DecisionHub's Terms of Service; Opens
              a new tab and acknowledge you've
              read our Privacy Policy. Notice at
              collection</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
