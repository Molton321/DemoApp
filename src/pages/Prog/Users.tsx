import { useEffect, useState } from "react";
import TablaGenerica from "../../components/Lists/Tabla";
import { getUsers, deleteUser, updateUser } from "../../services/UserServices";
import { User } from "../../models/User";
import Swal from "sweetalert2";

const handleDelete = async (id: number) => {
    console.log(`Intentando eliminar usuario con ID: ${id}`);
    Swal.fire({
        title: "Eliminación",
        text: "Está seguro de querer eliminar el registro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No"
    }).then(async (result) => {
        if (result.isConfirmed) {
            const success = await deleteUser(id);
            if (success) {
                Swal.fire({
                    title: "Eliminado",
                    text: "El registro se ha eliminado",
                    icon: "success"
                });
            }
            // 🔹 Vuelve a obtener los usuarios después de eliminar uno
            fetchData();
        }
    });
};
const Usuarios = () => {
    const [usuarios, setUsuarios] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then((data) => setUsuarios(data));
    },[]);

    const manejarAccion = (accion:String, item:any) => {
        if (accion === "editar") {
            console.log(updateUser(item.id, item));
            //TODO: Implementar la edición de usuarios
        } else if (accion === "eliminar") { 
            handleDelete(item.id);
            console.log("Eliminar usuario:", item);
        }
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <TablaGenerica
                datos={usuarios}
                columnas={["id", "name", "email", "birthday"]}
                acciones={[
                    { nombre: "editar", etiqueta: "Editar" },
                    { nombre: "eliminar", etiqueta: "Eliminar" },
          q       ]}
                onAccion={manejarAccion}
            />
        </div>
    );
};

export default Usuarios;

function fetchData() {
    throw new Error("Function not implemented.");
}
