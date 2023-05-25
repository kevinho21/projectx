import React from 'react';

const ThreeColumnLayout = ({ leftColumn, centerColumn, rightColumn }) => {
    return (
        <div className="three-column-layout">
            <div className="first-column">{leftColumn}</div>
            <div className="second-column">{centerColumn}</div>
            <div className="third-column">{rightColumn}</div>
        </div>
    );
};

export default ThreeColumnLayout;