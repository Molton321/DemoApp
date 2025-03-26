import React from 'react';

interface ParseDateProps {
    datetime: string;
}

const ParseDate: React.FC<ParseDateProps> = ({ datetime }) => {
    let Finaldate = new Date(datetime).toDateString();
    
    return (
    <div>
        {Finaldate}
    </div>)
};

export default ParseDate;