import React from "react";
import UserProfile from "../../components/Users/UserProfile";
import { User } from "../../models/User";

const Profile: React.FC = () => {
    const user: User = {
        id: 1,
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        age: 30
    };

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <UserProfile user={user} />
        </div>
    );
};

export default Profile;