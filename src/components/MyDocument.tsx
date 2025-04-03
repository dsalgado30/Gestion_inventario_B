import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Estilos del PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F8F9FA",
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#03045E",
    marginBottom: 10,
  },
  table: {
    displa: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#0077B6",
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "16.66%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#0077B6",
    backgroundColor: "#00B4D8",
    color: "#FFFFFF",
    padding: 6,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 10,
  },
  tableCol: {
    width: "16.66%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#0077B6",
    padding: 6,
    textAlign: "center",
    fontSize: 10,
  },
});

// Datos de la tabla (puedes pasarlos como props si vienen del backend)
const data = [
  {
    producto: "Laptop UltraBook Pro",
    bodega: "TIC",
    cantidad: 50,
    ubicacion: "Estantería 1, Fila 2",
    fecha: "2023-04-15",
    proveedor: "SwiftLine",
  },
  {
    producto: "Smartwatch FitPro",
    bodega: "TIC",
    cantidad: 25,
    ubicacion: "Estantería 3, Fila 1",
    fecha: "2023-02-28",
    proveedor: "TechGear",
  },
  {
    producto: "Auriculares NoiseGuard",
    bodega: "TIC",
    cantidad: 75,
    ubicacion: "Estantería 2, Fila 3",
    fecha: "2023-06-01",
    proveedor: "SwiftLine",
  },
  {
    producto: "Cámara MirrorPro",
    bodega: "TIC",
    cantidad: 30,
    ubicacion: "Estantería 4, Fila 4",
    fecha: "2023-08-10",
    proveedor: "OptiView",
  },
  {
    producto: "Batidora Industrial",
    bodega: "Gastronomía",
    cantidad: 40,
    ubicacion: "Estantería 1, Fila 4",
    fecha: "2023-03-20",
    proveedor: "KitchenPro",
  },
];

// Componente del PDF
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Reporte de Inventario</Text>

      <View style={styles.table}>
        {/* Encabezado */}
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Producto</Text>
          <Text style={styles.tableColHeader}>Bodega</Text>
          <Text style={styles.tableColHeader}>Cantidad</Text>
          <Text style={styles.tableColHeader}>Ubicación</Text>
          <Text style={styles.tableColHeader}>Fecha de Ingreso</Text>
          <Text style={styles.tableColHeader}>Proveedor</Text>
        </View>

        {/* Filas de datos */}
        {data.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCol}>{item.producto}</Text>
            <Text style={styles.tableCol}>{item.bodega}</Text>
            <Text style={styles.tableCol}>{item.cantidad}</Text>
            <Text style={styles.tableCol}>{item.ubicacion}</Text>
            <Text style={styles.tableCol}>{item.fecha}</Text>
            <Text style={styles.tableCol}>{item.proveedor}</Text>
          </View>
        ))}
      </View>

      <Text style={{ marginTop: 10, fontSize: 10, textAlign: "center" }}>
        Generado automáticamente por el sistema de inventario IGS.
      </Text>
    </Page>
  </Document>
);

export default MyDocument;
