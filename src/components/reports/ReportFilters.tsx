import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../MyDocument";

const ReportFilters = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select className="p-2 border rounded">
          <option>Inventario por Bodega</option>
        </select>
        <select className="p-2 border rounded">
          <option>Todas las bodegas</option>
        </select>
        <input type="date" className="p-2 border rounded w-full" />
      </div>

      <div className="mt-4 flex justify-between">
        <input type="text" placeholder="Buscar reportes..." className="p-2 border rounded w-full mr-4" />

        {/* Botón para descargar el PDF */}
        <PDFDownloadLink document={<MyDocument />} fileName="reporte_inventario.pdf">
          {({ loading }) => (
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              {loading ? "Generando..." : "Generar Reporte"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ReportFilters;
