import React from 'react';
import ApplyLeave from './ApplyLeave';
import LeaveBalance from './LeaveBalance';

const App = () => {
    return (
        <div>
            <h1>Leave Management System</h1>
            <ApplyLeave />
            <LeaveBalance userId="1" />
        </div>
    );
};

export default App;
