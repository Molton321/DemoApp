import { useEffect, useState } from "react";
import TablaGenerica from "../../components/Lists/Tabla";
import { getRoles, deleteRole, updateRole } from "../../services/RoleServices";
import { Role } from "../../models/Role";

const Roles = () => {
    const [Roles, setRoles] = useState<Role[]>([]);

    useEffect(() => {
        getRoles().then((data) => setRoles(data));
    },[]);

    const manejarAccion = (accion:String, item:any) => {
        if (accion === "editar") {
            console.log(updateRole(item.id, item));
            //TODO: Implementar la edición de Roles
        } else if (accion === "eliminar") {
            console.log(deleteRole(item.id))
        }
    };

    return (
        <div>
            <h2>Lista de Roles</h2>
            <TablaGenerica
                datos={Roles}
                columnas={["id", "role", "description"]}
                acciones={[
                    { nombre: "editar", etiqueta: "Editar" },
                    { nombre: "eliminar", etiqueta: "Eliminar" },
                ]}
                onAccion={manejarAccion}
            />
        </div>
    );
};

export default Roles;