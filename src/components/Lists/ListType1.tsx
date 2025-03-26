import React from "react";

interface ListType1Props {
    ListObject: { [key: string]: any }[];
}

const ListType1: React.FC<ListType1Props> = ({ ListObject }) => {
    const ObjectAtributes = Object.keys(ListObject[0]);
   

    if (!ListObject) {
        return <div>No data available</div>;
    }

    return (
        <div className="object-List">
            <table>
                <thead>
                    <tr>
                        {ObjectAtributes.map((value, index) => (
                            <th key={index}>{value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {ListObject.map((object, index) => (
                        <tr key={index}>
                            {ObjectAtributes.map((value, index) => (
                                <td key={index}>{object[value]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListType1;
