import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const App = () => {
    const [progressData, setProgressData] = useState([
        { label: 'HTML', progress: 90 },
        { label: 'CSS', progress: 90 },
        { label: 'JavaScript', progress: 70 },
        { label: 'Bootstrap', progress: 50 },
        { label: 'Node.js', progress: 50 },
        { label: 'MongoDB', progress: 50 },
        { label: 'Firebase', progress: 60 },
        { label: 'Figma', progress: 40 },
        { label: 'Canva', progress: 60 },
    ]);

    return (
        <div className="app">
            <h1>Progress Bars Example</h1>
            {progressData.map((item, index) => (
                <div key={index} className="progress-container">
                    <h2>{item.label}</h2>
                    <div className="progress">
                        <div style={{ width: `${item.progress}%` }}></div>
                    </div>
                    <span className="progress-text" style={{ color: '#33ccff', fontSize: '16px', fontWeight: 'bold' }}>{item.progress}%</span>
                </div>
            ))}
        </div>
    );
};

export default App;

