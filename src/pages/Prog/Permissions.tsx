import { useEffect, useState } from "react";
import TablaGenerica from "../../components/Lists/Tabla";
import { getPermissions, deletePermission, updatePermission } from "../../services/PermissionServices";
import { Permission } from "../../models/Permission";

const Permisos = () => {
    const [Permisos, setPermissions] = useState<Permission[]>([]);

    useEffect(() => {
        getPermissions().then((data) => setPermissions(data));
    },[]);

    const manejarAccion = (accion:String, item:any) => {
        if (accion === "editar") {
            console.log(updatePermission(item.id, item));
            //TODO: Implementar la edición de Permisos
        } else if (accion === "eliminar") {
            console.log(deletePermission(item.id))
        }
    };

    return (
        <div>
            <h2>Lista de Permisos</h2>
            <TablaGenerica
                datos={Permisos}
                columnas={["id", "permission", "description"]}
                acciones={[
                    { nombre: "editar", etiqueta: "Editar" },
                    { nombre: "eliminar", etiqueta: "Eliminar" },
                ]}
                onAccion={manejarAccion}
            />
        </div>
    );
};

export default Permisos;