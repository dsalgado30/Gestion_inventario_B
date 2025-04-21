import { useState, useEffect } from "react";

export const useReports = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const response = {
          totalRecords: 8,
          period: "Último mes",
          inventory: [
            { product: "Laptop UltraBook Pro", warehouse: "TIC", quantity: 50, location: "Estantería 1, Fila 2", date: "2023-04-15", supplier: "SwiftLine" },
            { product: "Smartwatch FitPro", warehouse: "TIC", quantity: 25, location: "Estantería 3, Fila 1", date: "2023-02-28", supplier: "TechGear" },
            { product: "Auriculares NoiseGuard", warehouse: "TIC", quantity: 75, location: "Estantería 2, Fila 3", date: "2023-06-01", supplier: "SwiftLine" },
            { product: "Cámara MirrorPro", warehouse: "TIC", quantity: 30, location: "Estantería 4, Fila 4", date: "2023-08-10", supplier: "OptiView" },
            { product: "Batidora Industrial", warehouse: "Gastronomía", quantity: 40, location: "Estantería 1, Fila 4", date: "2023-03-20", supplier: "KitchenPro" },
          ],
          charts: {
            warehouseDistribution: [ { warehouse: "TIC", count: 180 }, { warehouse: "Gastronomía", count: 40 } ],
            recentMovements: []
          }
        };
        setData(response);
      } catch (err) {
        setError("Error al cargar los reportes");
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  // Función para descargar JSON
  const downloadJSON = (filename, content) => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { 
    data, 
    isLoading, 
    error, 
    isSuccess: !!data, 
    downloadJSON 
  };
};
