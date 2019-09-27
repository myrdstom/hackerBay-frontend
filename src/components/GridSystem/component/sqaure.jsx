import React from 'react';
import mushroomSprite from '../../../assets/images/mushroomSprite.png';

const randomize = items => {
    return Math.floor(Math.random() * items);
};
const Square = ({ width }) => {
    const cells = [];
    const checkRandom = randomize(width);
    for (let i = 0; i < width; i++) {
        cells.push(
            <td className="row" key={i}>
                {checkRandom === i ? (
                    <img
                        className="mushroom__sprite"
                        src={mushroomSprite}
                        alt=""
                    />
                ) : (
                    ''
                )}
            </td>
        );
    }
    return cells;
};

export default Square;
