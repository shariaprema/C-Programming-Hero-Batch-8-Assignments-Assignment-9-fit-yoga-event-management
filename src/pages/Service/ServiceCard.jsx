
const ServiceCard = ({service}) => {
    const{id,title_name, picture,description,price} = service || {};

    return (
        <div>
              <div className="relative max-w-full flex justify-center items-center mx-auto flex-col bg-white rounded-md bg-clip-border text-gray-700 shadow-md">
             <div className="relative rounded-t-md max-w-full mx-auto justify-center flex overflow-hidden">
             
                <img src={picture}
                className="relative bg-center bg-contain"/> 

               <b  className="absolute bottom-0 left-2/4 flex w-[calc(100%-0rem)] -translate-x-2/4 justify-between bg-[#4fbf70]/50 py-4 px-6 shadow-lg shadow-[#4fbf70]/5 saturate-200 backdrop-blur-sm">
               <h2  className=" text-white rounded-md py-3 px-4 bg-pink-500  text-sm font-medium">Price: ${price}:00</h2>
                </b>

               
                </div>
                <div className="p-4">
                <div className="mb-2  flex items-center justify-between">
                <p className="block text-4xl font-bold leading-relaxed text-blue-gray-900 antialiased">
                {title_name}
                </p>
                </div>
                <p className="block text-base font-normal leading-normal text-gray-700 antialiased opacity-75">
                {description}
                </p>
            </div>
            
            </div>
        </div>
    );
};

export default ServiceCard;