import React from "react";
import { User } from "../../models/User";
import ListType1 from "../../components/Lists/ListType1";

const List1: React.FC = () => {
    const users: User[] = [
        {
            name: "Juan Pérez",
            email: "jun3432@gmail.com",
            age: 30,
        },
        {
            name: "Juan Pérez",
            email: "juanojuaninjuanito@gmail.com",
            age: 46,
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Perfiles de Usuario</h1>
            <div className="mb-8">
                <ListType1 ListObject={users} />
            </div>
        </div>
    );
};

export default List1;