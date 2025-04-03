import { Alert } from "@heroui/react";
import { useReports } from "../../hooks/use-reports";
import ReportFilters from "../../components/reports/ReportFilters";
import ReportTable from "../../components/reports/ReportTable";
import CardLoading from "../../components/atomic/atoms/CardLoading";
// import ReportCharts from "../../components/reports/ReportCharts";

const ReportsPage = () => {
  const { isLoading, isSuccess, data, error } = useReports();

  return (
    <>
      <h1 className="text-large">Reportes</h1>
      <p className="my-3 text-default-400 text-small">
        Generación de reportes del sistema de gestión de bodegas
      </p>

      {/* Filtros */}
      <ReportFilters />

      {/* Error */}
      {error && (
        <div className="w-full flex items-center my-3">
          <Alert color="danger" title="Ocurrió un error al obtener los reportes" />
        </div>
      )}

      {/* Carga */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardLoading key={index} />
          ))}
        </div>
      )}

      {/* Contenido */}
      {isSuccess && (
        <div>
          <ReportTable data={data} />
          {/* <ReportCharts data={data} /> */}
        </div>
      )}
    </>
  );
};

export default ReportsPage;
