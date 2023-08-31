
const Cards = ({img, title, description}) =>{
    return (
      <div className="w-full hover:scale-105 transition duration-300 relative py-[1.2rem]" >
      <div className="max-w-md rounded-lg overflow-hidden shadow-lg relative">
        <div className="absolute top-0 left-0 w-full h-full "></div>
        <div className="relative z-10 p-6">
          <h2 className="text-2xl font-semibold mb-2 text-white text-center">{title}</h2>
          <img src={img} alt={title} className="w-full h-auto mb-4" />
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
      );
}

export default Cards;