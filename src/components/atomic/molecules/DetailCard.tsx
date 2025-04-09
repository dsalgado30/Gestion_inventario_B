interface DetailedInventoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  encargado: string;
  items: number;
}

const DetailedInventoryCard = ({
  title,
  description,
  imageUrl,
  link,
  encargado,
  items,
}: DetailedInventoryCardProps) => {
  return (
    <div className="w-full  rounded-xl overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02] duration-300">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold flex items-center gap-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex justify-between text-sm mt-2">
          <div>
            <span className="text-gray-500">Encargado</span>
            <br />
            <span className="font-semibold">{encargado}</span>
          </div>
          <div>
            <span className="text-gray-500">Items</span>
            <br />
            <span className="font-semibold">{items}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
            Activo
          </span>
          <a
            href={link}
            className="text-sm text-blue-600 flex items-center gap-1 hover:underline"
          >
            Ver detalles <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailedInventoryCard;
