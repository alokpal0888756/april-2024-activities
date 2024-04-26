import React, { useState } from 'react';
import axios from 'axios';

const AdminLoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post(`http://localhost:8080/employee/login?email=${email}&password=${password}`, {
                email: email,
                password: password
            });

            if (response.status === 200) {
                // Redirect to home page upon successful login
                window.location.href = '/home';
            } else {
                // Handle other status codes
                console.log('Unexpected status code:', response.status);
            }
        } catch (error) {
            if (error.response.status === 500) {
                // Handle incorrect password error
                setError('Incorrect email or password');
            } else {
                // Handle other errors
                console.error('Error occurred:', error.message);
            }
        }
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <div className="d-flex justify-content-between align-items-center" style={{padding:"10px"}}>
                                    <button type="submit" className="btn btn-primary mr-2">Login</button>
                                </div>
                            </form>
                            <div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AdminLoginPage;