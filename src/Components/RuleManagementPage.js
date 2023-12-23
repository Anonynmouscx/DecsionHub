import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RuleManagementPage.css';

const RuleManagementPage = () => {
  // Dummy data for previously added rules
  const rules = ['Rule 1', 'Rule 2', 'Rule 3'];
  const navigate = useNavigate();

  return (
    <div className="rule-manage">
      <div className="manage-form">
        <h2 className="manage-head">Decision Hub<br></br><span>Rule Management</span></h2>
        {rules.map((rule, index) => (
          <div key={index} className="mb-4 flex items-center">
            <span className="mr-2 text-gray-100">{rule}</span>

            <button className="edit-btn">
              Edit
            </button>
          </div>
        ))}
        <button
          className="ba-button"
          onClick={()=> navigate('/home')}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default RuleManagementPage;
