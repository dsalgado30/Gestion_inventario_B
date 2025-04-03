const ReportCharts = ({ data }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded-md shadow h-40 flex items-center justify-center text-gray-500">
          {data.charts.warehouseDistribution.length > 0 ? "Gráfico de distribución por bodega" : "Sin datos"}
        </div>
        <div className="bg-white p-4 rounded-md shadow h-40 flex items-center justify-center text-gray-500">
          {data.charts.recentMovements.length > 0 ? "Gráfico de movimientos recientes" : "Sin datos"}
        </div>
      </div>
    );
  };
  
  export default ReportCharts;
  