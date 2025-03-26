import React from "react";
import ParseDate from "../Utils/ParseDate";

interface TablaGenericaProps {
    datos: { [key: string]: any }[];
    columnas: string[];
    acciones: { nombre: string; etiqueta: string }[];
    onAccion: (accion: string, item: { [key: string]: any }) => void;
}

const TablaGenerica: React.FC<TablaGenericaProps> = ({ datos, columnas, acciones, onAccion }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                        {columnas.map((col) => (
                            <th key={col} className="py-3 px-6 text-left font-semibold">{col}</th>
                        ))}
                        <th className="py-3 px-6 text-left font-semibold">Acciones</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                    {datos.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                            {columnas.map((col) => (
                                <td key={col} className="py-3 px-6 text-left">
                                    {col === "birthday" ? <ParseDate datetime={item[col]} /> : item[col]}
                                    </td>
                            ))}
                            <td className="py-3 px-6 text-left">
                                <div className="flex space-x-2">
                                    {acciones.map((accion) => (
                                        <button
                                            key={accion.nombre}
                                            onClick={() => onAccion(accion.nombre, item)}
                                            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-1 px-3 rounded"
                                        >
                                            {accion.etiqueta}
                                        </button>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaGenerica;