import React from 'react';
//3 properties: direction (left/right), clickFunction, glyph (what's to be rendered)

const Arrow = ({direction, clickFunction, glyph}) => {
    return (
        <div
            className={`slide-arrow ${direction}`}
            onClick={clickFunction}>

            {glyph}

        </div>
    )
};


export default Arrow;