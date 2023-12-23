import React,{useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DebuggingPage from './DebuggingPage';
import DebuggingPageExcel from './DebuggingPageExcel';
import './Clickables.css';
// import 'react-tabs/style/react-tabs.css';


export const Clickables = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
       <TabList className='heads'>
        <div className='collect'>
        <Tab className={`tab ${tabIndex === 0 ? 'selected' : ''}`}>SQL</Tab>
        <Tab className={`tab ${tabIndex === 1 ? 'selected' : ''}`}>EXCEL</Tab>
        </div>
      </TabList>
        <TabPanel>
            <DebuggingPage/>
        </TabPanel>
        <TabPanel>
            <DebuggingPageExcel/>
        </TabPanel>
      </Tabs>
    );
}
