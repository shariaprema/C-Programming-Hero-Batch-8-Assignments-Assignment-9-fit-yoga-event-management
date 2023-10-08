import { Link } from "react-router-dom";

const ServicesCards = ({service}) => {
    const{id,title_name, picture,description,price} = service || {};

    
    return (
        <div>
           

            <div className="relative flex max-w-[24rem] flex-col rounded-t-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none rounded-t-xl">
                <img
                src={picture} className="h-52 w-[368px]"
                alt="ui/ux review check"
                />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               {title_name}
                </h4>
                <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                {description}
                </p>
            </div>
            <div className="flex items-center justify-between p-6">
                <Link to={`/services/${id}`}> 
                <div className="p-6 pt-0">
                <button
                className="select-none rounded-lg bg-[#4fbf70] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-emerald-700/20 transition-all hover:shadow-lg hover:shadow-emerald-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                >
                 Read more
                </button>
                </div>
                </Link>
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                ${price}
                </p>
            </div>
            </div>
        </div>
    );
};

export default ServicesCards;