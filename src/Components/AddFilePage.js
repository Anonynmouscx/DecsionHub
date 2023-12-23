import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddFilePage.css';

const AddFilePage = () => {
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    // Handle logic for file upload (e.g., send to server)
    console.log('Uploaded file:', file.name);
  };


  return (
    <div className="wrap">
      <div className="file-block">
        <h2 className="head">Decision Hub<br></br><span>Add Files</span></h2>
        <label className="file-label">
          <span className="choose-file">Choose File</span>
          <input
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            required
          />
          <span className="nothing">No file chosen</span>
        </label>
        <button className="return-btn"
          onClick={() => navigate('/home')}>Back</button>
      </div>
    </div>
  );
};

export default AddFilePage;
