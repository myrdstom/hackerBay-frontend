import React from 'react';

const Square = ({ width }) => {
    const squares = [];
    for (let i = 0; i < width; i++) {
        squares.push(<td className="row" key={i} />);
    }
    return squares;
};

export default Square;
