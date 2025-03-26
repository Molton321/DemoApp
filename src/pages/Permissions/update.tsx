
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getPermissionById, updatePermission } from "../../services/PermissionServices";
import Swal from "sweetalert2";

import { Permission } from '../../models/Permission';
import PermissionFormValidator from '../../components/Permissions/PermissionFormValidator';
import Breadcrumb from "../../components/Breadcrumb";

const UpdatePermissionPage = () => {
    const { id } = useParams(); // Obtener el ID de la URL

    const navigate = useNavigate();
    const [Permission, setPermission] = useState<Permission | null>(null);

    // Cargar datos del usuario después del montaje
    useEffect(() => {
        console.log("Id->" + id)
        const fetchPermission = async () => {
            if (!id) return; // Evitar errores si el ID no está disponible
            const PermissionData = await getPermissionById(parseInt(id));
            setPermission(PermissionData);
        };

        fetchPermission();
    }, [id]);

    const handleUpdatePermission = async (thePermission: Permission) => {
        try {
            const updatedPermission = await updatePermission(thePermission.id || 0, thePermission);
            if (updatedPermission) {
                Swal.fire({
                    title: "Completado",
                    text: "Se ha actualizado correctamente el registro",
                    icon: "success",
                    timer: 3000
                });
                navigate("/Permissions"); // Redirección en React Router
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Existe un problema al momento de actualizar el registro",
                    icon: "error",
                    timer: 3000
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Existe un problema al momento de actualizar el registro",
                icon: "error",
                timer: 3000
            });
        }
    };

    if (!Permission) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    }

    return (
        <>
            <Breadcrumb pageName="Actualizar Usuario" />
            <PermissionFormValidator
                handleUpdate={handleUpdatePermission}
                mode={2} // 2 significa actualización
                Permission={Permission}
            />
        </>
    );
};

export default UpdatePermissionPage;