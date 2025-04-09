import DetailedInventoryCard from "../../components/atomic/molecules/DetailCard";

const AdminStorePage = () => {
  return (
    <div className="w-full px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
        Sistema de Gestión de Bodegas
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Gestión y control de las diferentes áreas de almacenamiento
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <DetailedInventoryCard
          title="TIC"
          description="Servidores, equipos de red y sistemas de almacenamiento para la infraestructura tecnológica."
          imageUrl="https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/06/post_thumbnail-4efabca9bd56b38edc0058c4ba006481.jpeg"
          link="https://github.com/heroui-inc/heroui"
          encargado="Diego Calderon"
          items={245}
        />

        <DetailedInventoryCard
          title="Gastronomía"
          description="La bodega de Gastronomía está equipada con una amplia gama de utensilios, equipos e ingredientes para la formación en artes culinarias."
          imageUrl="https://www.aauniv.com/s/blog/wp-content/uploads/2021/12/que-hace-licenciado-gastronomia-artes-culinarias.jpg"
          link="https://github.com/heroui-inc/heroui"
          encargado="Jane Smith"
          items={789}
        />

        <DetailedInventoryCard
          title="Agropecuaria"
          description="La bodega Agropecuaria almacena una variedad de equipos y materiales esenciales para la formación en producción agrícola y ganadera."
          imageUrl="https://dondeestudiar.pe/wp-content/uploads/2024/05/ingenieria-agropecuaria.jpg"
          link="https://github.com/heroui-inc/heroui"
          encargado="Luis Perez"
          items={567}
        />

        <DetailedInventoryCard
          title="Escuela Nacional del Café"
          description="La bodega de la Escuela Nacional del Café está especializada en el almacenamiento de diferentes variedades de granos de café, equipos de tostado, molinos y todos los implementos necesarios para la preparación y catación de café."
          imageUrl="https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/12/01/6569fef148628.png"
          link="https://github.com/heroui-inc/heroui"
          encargado="Ana Martínez"
          items={342}
        />
      </div>
    </div>
  );
};

export default AdminStorePage;
