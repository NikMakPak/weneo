import React, {useState} from 'react';

const BlockItem = ({jsx, startStyles}) => {
    let [Style,setStyle] = useState(startStyles)
    return (
        <>
            <style>{Style}</style>
            {jsx}
        </>
    );
};

export default BlockItem;