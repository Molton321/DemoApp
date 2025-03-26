import React from "react";
import { User } from "../../models/User";
import UserProfile from "../Users/UserProfile";

interface Listype2Props {
  users : User[];
}

const ObjectProfile: React.FC<Listype2Props> = ({ users }) => {
  return (
    <div>
    <h2>Lista de Usuarios</h2>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserProfile user={user}/>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ObjectProfile;