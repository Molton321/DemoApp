import { Permission } from "../../models/Permission";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


// Definimos la interfaz para los props
interface MyFormProps {
    mode: number; // Puede ser 1 (crear) o 2 (actualizar)
    handleCreate?: (values: Permission) => void;
    handleUpdate?: (values: Permission) => void;
    Permission?: Permission | null;
}



const PermissionFormValidator: React.FC<MyFormProps> = ({ mode, handleCreate, handleUpdate, Permission }) => {

    const handleSubmit = (formattedValues: Permission) => {
        if (mode === 1 && handleCreate) {
            handleCreate(formattedValues);  // Si `handleCreate` está definido, lo llamamos
        } else if (mode === 2 && handleUpdate) {
            handleUpdate(formattedValues);  // Si `handleUpdate` está definido, lo llamamos
        } else {
            console.error('No function provided for the current mode');
        }
    };

    return (
        <Formik
            initialValues={Permission ? Permission : {
                name: "",
                description: "",
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("El nombre es obligatorio"),
                description: Yup.string().required("La descripcion es obligatoria"),
              
                
            })}
            onSubmit={(values) => {
                const formattedValues = { ...values } //age: Number(values.age) };  // Formateo adicional si es necesario
                handleSubmit(formattedValues);
            }}

        >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-6 bg-white rounded-md shadow-md">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                        <Field type="text" name="name" className="w-full border rounded-md p-2" />
                        <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
                    </div>

                    {/* description */}
                    <div>
                        <label htmlFor="description" className="block text-lg font-medium text-gray-700">description</label>
                        <Field type="description" name="description" className="w-full border rounded-md p-2" />
                        <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />
                    </div>
                    
                    {/* Botón de enviar */}
                    <button
                        type="submit"
                        className={`py-2 px-4 text-white rounded-md ${mode === 1 ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}
                    >
                        {mode === 1 ? "Crear" : "Actualizar"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default PermissionFormValidator;