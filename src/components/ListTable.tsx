interface ListTableProps {
    headers: string[];
    data: any[];
    actions: any;
    onAccion: any;
}

const ListTable: React.FC<ListTableProps> = ({ data, headers, actions, onAccion }) => {

    const toDate = (date: Date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-indexed
        const year = date.getFullYear();
        <p>{day}, {month}, {year}</p>
    }

    return (
        <div className="grid grid-cols-1 gap-9">
            <div className="flex flex-col gap-9">
                {/* <!-- Input Fields --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Listado
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        {headers.map((header: any) => (
                                            <th key={header} className="px-6 py-3 font-medium text-gray-900 dark:text-white">
                                                {header}
                                            </th>
                                        ))}
                                        <th scope="col" className="px-6 py-3">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                            {Object.keys(item).map((key) => (
                                                <td key={key} className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    {typeof item[key] === 'boolean' ? (
                                                        <span className={`px-2 py-1 rounded-full ${item[key] ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                            {item[key] ? "Activo" : "Inactivo"}
                                                        </span>
                                                    ) : (
                                                        item[key] === 'fecha' ? (
                                                            toDate(item[key])
                                                        ): item[key]
                                                    )}
                                                </td>
                                            ))}
                                            <td className="px-6 py-4 space-x-2">
                                                {actions.map((action: any) => (
                                                    <button
                                                    key={action.nombre}
                                                    onClick={() => onAccion(action.nombre, item)}
                                                    >
                                                    {action.etiqueta}
                                                    </button>
                                                ))}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListTable;
