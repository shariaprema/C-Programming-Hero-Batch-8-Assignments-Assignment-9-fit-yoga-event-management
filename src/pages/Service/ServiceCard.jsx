
const ServiceCard = ({service}) => {
    const{id,title_name, picture,description,price} = service || {};

    return (
        <div>
              <div className=" max-w-full flex justify-center items-center mx-auto flex-col bg-white rounded-md bg-clip-border text-gray-700 shadow-md">
             <div className="relative rounded-t-md max-w-full mx-auto justify-center flex overflow-hidden">
             
                <img src={picture}
                className="bg-center bg-contain"/> 

               {/* <b  className="absolute bottom-0 left-2/4 flex w-[calc(100%-0rem)] -translate-x-2/4 justify-between bg-[#4fbf70]/50 py-4 px-6 shadow-lg shadow-[#4fbf70]/5 saturate-200 backdrop-blur-sm">
               <h2  className=" text-white rounded-md py-3 px-4 bg-pink-500  text-sm font-medium">Price: ${price}:00</h2>
                </b> */}

                </div>
                <div className="p-4">
                <div className="mb-2 flex justify-between">
               
               <p className="block text-4xl font-bold leading-relaxed text-[#4fbf70] antialiased">
                {title_name}
                </p>
               
                </div>

                <p className="block text-base font-normal leading-normal mb-3 text-gray-700 antialiased opacity-75">
                {description}
                </p>

                <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Price: ${price}:00</button>
            </div>
            
            </div>
        </div>
    );
};

export default ServiceCard;