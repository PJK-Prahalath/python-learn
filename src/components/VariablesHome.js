import React from 'react';
import { useNavigate } from 'react-router-dom';

const VariablesHome = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Variables Stage</h1>
            <button onClick={() => navigate('/variables/text')}>Text Reading</button>
            <button onClick={() => navigate('/variables/video')}>Video Tutorial</button>
            <button onClick={() => navigate('/variables/test')}>Take Test</button>
        </div>
    );
};

export default VariablesHome;
