const ReportTable = ({ data }) => {
    if (!data || !data.inventory) return null;
  
    return (
      <div className="bg-white rounded-md shadow mt-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="p-2">Producto</th>
              <th className="p-2">Bodega</th>
              <th className="p-2">Cantidad</th>
              <th className="p-2">Ubicación</th>
              <th className="p-2">Fecha de Ingreso</th>
              <th className="p-2">Proveedor</th>
            </tr>
          </thead>
          <tbody>
            {data.inventory.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{item.product}</td>
                <td className="p-2"><span className="bg-blue-200 text-blue-800 px-2 py-1 rounded">{item.warehouse}</span></td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.location}</td>
                <td className="p-2">{item.date}</td>
                <td className="p-2">{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-2 text-gray-500 text-sm">Mostrando {data.inventory.length} resultados</div>
      </div>
    );
  };
  
  export default ReportTable;
  