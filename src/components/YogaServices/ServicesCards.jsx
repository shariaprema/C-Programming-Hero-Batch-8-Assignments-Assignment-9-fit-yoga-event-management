import { Link } from "react-router-dom";

const ServicesCards = ({service}) => {
    const{id,title_name, picture,description,price} = service || {};

    
    return (
        <div>

            <div className="card lg:w-[360px] md:w-[360px] w-full h-[465px] bg-base-100 shadow-xl">
           
            <figure> <img src={picture} alt="card-pic" className="h-[200px] lg:w-[400px] md:w-[400px] w-full object-cover bg-center overflow-hidden max-w-sm" />
            </figure>
            
            <div className="card-body">
              
            <div className="">
                <h4 className="block text-xl font-semibold  text-blue-gray-900">
               {title_name}
                </h4>
  
                {
                description.length > 100 ?
                <p className="mt-3 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"> 
                {description.slice(0,100)}
                ....</p>
                :

                <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">{description}</p>
                
                }
                
            </div>
            <div className="flex items-center justify-between pt-4 ">
               <div>
               <Link to={`/services/${id}`}> 
                <div className="  pt-0">
                <button
                className="select-none rounded-lg bg-[#4fbf70] py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-emerald-700/20 transition-all hover:shadow-lg hover:shadow-emerald-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                 Read more
                </button>
                </div>
                </Link>
               </div>
                <div>
                <p className=" text-base font-semibold ">
                ${price}
                </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ServicesCards;