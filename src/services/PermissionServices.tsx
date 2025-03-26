import { Permission } from "../models/Permission";

const API_URL = import.meta.env.VITE_API_MOCKSERVER + "/permissions" || ""; // Reemplaza con la URL real

// Obtener todos los permisos
export const getPermissions = async (): Promise<Permission[]> => {
    console.log("aqui " + API_URL)
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al obtener permisos");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

// Obtener un permiso por ID
export const getPermissionById = async (id: number): Promise<Permission | null> => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("permiso no encontrado");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Crear un nuevo permiso
export const createPermission = async (Permission: Omit<Permission, "id">): Promise<Permission | null> => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Permission),
        });
        if (!response.ok) throw new Error("Error al crear permiso");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Actualizar permiso
export const updatePermission = async (id: number, Permission: Partial<Permission>): Promise<Permission | null> => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Permission),
        });
        if (!response.ok) throw new Error("Error al actualizar permiso");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Eliminar permiso
export const deletePermission = async (id: number): Promise<boolean> => {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Error al eliminar permiso");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};
