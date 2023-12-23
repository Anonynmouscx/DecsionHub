import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './DecisionMaking.css';

const DecisionMakingPage = () => {
  const [userQuestion, setUserQuestion] = useState('');
  const navigate = useNavigate();

  const handleCheckValidity = async () => {
    try {
      const response = await fetch('http:/localhost:4000/api/v1/query/generateDecision', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userDecision: userQuestion }),
      });

      if (response) {
        const result = await response.json();
        // Handle the result as needed
        if (result) {
          toast.success('Question is valid!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error('Question is not valid!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        console.error('Failed to check question validity.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="dec-main">
      <div className="dec-form">
        <h2 className="dec-head">Decision Hub<br></br><span>Decision Making</span> </h2>
        <label className="dec-label">
          Enter Your Decision:
          <input
            type="text"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            className="dec-inp"
            placeholder='Your Decison'
            required
          />
        </label>

        <div className='buttn'>
        <button
          onClick={handleCheckValidity}
          className="val-btn"
        >
          Check Validity
        </button>

        
        <button
          className="ba-btn"
          onClick={() => navigate('/home')}
        >
          Back
        </button>
        </div>
      </div>
    </div>
  );
};

export default DecisionMakingPage;
