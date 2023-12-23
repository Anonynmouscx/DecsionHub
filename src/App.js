
import React from 'react';
import { Route,  Routes } from 'react-router-dom';
import HomePage from './Components/HomePage'
import RuleBuilderPage from './Components/RuleBuilderPage';
import RuleManagementPage from './Components/RuleManagementPage';
// import DebuggingPage from './Components/DebuggingPage';
import AddFilePage from './Components/AddFilePage';
import LoginPage from './Components/LoginPage';
import DecisionMakingPage from './Components/DecisionMaking';
import { Clickables } from './Components/Clickables';
import './App.css';
// import DebuggingPageExcel from './Components/DebuggingPageExcel';


const App = () => {
  return (
      <Routes>
        <Route path="/home"  element={<HomePage/>} />
        <Route path="/rule-builder" element={<RuleBuilderPage/>} />
        <Route path="/rule-management" element={<RuleManagementPage/>} />
        <Route path="/debugging" element={<Clickables/>} />
        
        <Route path="/add-file" element={<AddFilePage/>} />
        <Route path="/" element={<LoginPage/>} />
        <Route path="/decision-making" element={<DecisionMakingPage/>} />
    </Routes>
  );
};

export default App;
