import { ReportBadge } from "../atoms/ReportBadge";
import { ReportActionsDropdown } from "../molecules/ReportActionsDropdown";

const rows = [
  { name: "Laptop UltraBook Pro", bodega: "TIC", cantidad: 50, estado: "Disponible", proveedor: "SwiftLine", movimientos: 5 },
  { name: "Smartwatch FitPro", bodega: "TIC", cantidad: 25, estado: "Disponible", proveedor: "TechGear", movimientos: 3 },
  { name: "Batidora Industrial", bodega: "Gastronomía", cantidad: 40, estado: "Disponible", proveedor: "KitchenPro", movimientos: 2 },
];

export const ReportTable = () => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Producto</th>
            <th className="p-4 text-left">Bodega</th>
            <th className="p-4 text-left">Cantidad</th>
            <th className="p-4 text-left">Estado</th>
            <th className="p-4 text-left">Proveedor</th>
            <th className="p-4 text-left">Movimientos</th>
            <th className="p-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-4">{r.name}</td>
              <td className="p-4">
                <ReportBadge label={r.bodega} color="blue" />
              </td>
              <td className="p-4">{r.cantidad}</td>
              <td className="p-4">
                <ReportBadge label={r.estado} color={r.estado === "Disponible" ? "green" : "yellow"} />
              </td>
              <td className="p-4">{r.proveedor}</td>
              <td className="p-4">
                <ReportBadge label={`${r.movimientos} movimientos`} color="purple" />
              </td>
              <td className="p-4">
                <ReportActionsDropdown />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
