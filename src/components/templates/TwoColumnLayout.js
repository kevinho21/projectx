import React from 'react';

const TwoColumnLayout = ({ leftColumn, rightColumn }) => {
    return (
        <div className="two-column-layout">
            <div className="first-column">{leftColumn}</div>
            <div className="second-column">{rightColumn}</div>
        </div>
    );
};

export default TwoColumnLayout;