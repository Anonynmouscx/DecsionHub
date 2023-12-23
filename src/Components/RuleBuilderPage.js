import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './RuleBuilderPage.css';

const RuleBuilderPage = () => {
  const [newRule, setNewRule] = useState('');
  const navigate = useNavigate();

  const handleAddRule = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/rule/addRule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newRule }),
      });

      if (response) {
        toast.success('Rule added successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('Failed to add rule!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      console.log(response);
    } catch (error) {
      console.error('Error:', error.message);
      // Show error toast
      toast.error('Error adding rule!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="rule-main">
      <div className="rule-form">
        <h2 className="rule-head">Decision Hub<br></br><span>Rule Builder</span></h2>
        <label className="rule-label">
          Add New Rule:
          <input
            type="text"
            value={newRule}
            onChange={(e) => setNewRule(e.target.value)}
            className="rule-inp"
            placeholder='Type your Role' 
            required
          />
        </label>

        <div className='merge'>
        <button
          onClick={handleAddRule}
          className="sub-on"
        >
          Submit
        </button>
        <button
          className="back-on"
          onClick={()=> navigate('/home')}
        >
          Back
        </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
export default RuleBuilderPage;
