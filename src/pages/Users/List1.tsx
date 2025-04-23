import ListTable from '../../components/ListTable';
import Breadcrumb from '../../components/Breadcrumb';
import { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../../services/UserServices';
import { User } from '../../models/User';
import Swal from 'sweetalert2';

/**
 * Componente `List` que muestra una lista de usuarios con opciones para ver, editar y eliminar.
 *
 * @component
 *
 * @returns {JSX.Element} Un componente que renderiza una tabla de usuarios con acciones.
 *
 * @example
 * <List />
 *
 * @remarks
 * Este componente utiliza `useEffect` para obtener los datos de los usuarios cuando el componente se monta.
 *
 * @function fetchData
 * Obtiene los datos de los usuarios y los almacena en el estado `data`.
 *
 * @function onAction
 * Maneja las acciones de ver, editar y eliminar para cada usuario.
 *
 * @function handleView
 * Muestra los detalles de un usuario específico.
 *
 * @function handleEdit
 * Permite editar los detalles de un usuario específico.
 *
 * @function handleDelete
 * Elimina un usuario específico después de confirmar la acción.
 *
 * @param {number} id - El ID del usuario.
 *
 * @requires Swal - Librería para mostrar alertas y confirmaciones.
 * @requires Breadcrumb - Componente para mostrar la navegación de migas de pan.
 * @requires ListTable - Componente para mostrar la tabla de usuarios.
 */
const List = () => {
  const headers = [
    'ID',
    'Nombre',
    'Correo',
    'Edad',
    'Ciudad',
    'Teléfono',
    'Activo',
  ];

  // Estado para almacenar los datos del JSON
  const [data, setData] = useState<User[]>([]);
  const actions = [
    { nombre: 'handleView', etiqueta: 'Ver' },
    { nombre: 'handleEdit', etiqueta: 'Editar' },
    { nombre: 'handleDelete', etiqueta: 'Eliminar' },
  ];

  // 🔹 Llamar `fetchData` cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Obtiene los datos de los usuarios
  const fetchData = async () => {
    const users = await getUsers();
    setData(users);
  };

  const onAction = (action: string, item: any) => {
    switch (action) {
      case 'handleView':
        handleView(item.id);
        break;
      case 'handleEdit':
        handleEdit(item.id);
        break;
      case 'handleDelete':
        handleDelete(item.id);
        break;
      default:
        break;
    }
  };

  const handleView = (id: number) => {
    console.log(`Ver registro con ID: ${id}`);
  };

  const handleEdit = (id: number) => {
    console.log(`Editar registro con ID: ${id}`);
    // Lógica para editar el registro
  };

  const handleDelete = async (id: number) => {
    console.log(`Intentando eliminar usuario con ID: ${id}`);
    Swal.fire({
      title: 'Eliminación',
      text: 'Está seguro de querer eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const success = await deleteUser(id);
        if (success) {
          Swal.fire({
            title: 'Eliminado',
            text: 'El registro se ha eliminado',
            icon: 'success',
          });
        }
        // 🔹 Vuelve a obtener los usuarios después de eliminar uno
        fetchData();
      }
    });
  };

  return (
    <>
      <Breadcrumb pageName="Usuarios" />
      <ListTable
        headers={headers}
        data={data}
        actions={actions}
        onAccion={onAction}
      />
    </>
  );
};
export default List;
