import banner from '../../../assets/yoga-img/banner.jpg'
// import pic2 from '../../../assets/pic/Banner.jpg'




const Banner = () => {


//   <div>   
// <div className="mx-auto relative w-[360px] h-[383px] flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
// <div className="relative  overflow-hidden  rounded-t-xl  bg-white bg-clip-border text-gray-700">
//     <img
//     src={picture}
//     className="h-[294px] w-[360px] object-cover bg-bottom"
//     />
// </div>

// <div className="pl-3 mb-2">
// <p  className="block text-xl font-semibold  ">{title_name}</p>
// </div>
// <div className="pl-3 mb-2">
// {/* <p className="text-sm object-cover">{description}</p> */}
// </div>

// <div className="pl-3 mt-4 mb-1 flex">
//     <h2  className=" rounded-md py-1 px-3 text-sm font-medium">{price}</h2>
// </div>

// <Link to={`/servics/${id}`}> <button className="btn btn-primary">See Details</button></Link>


// </div>



// </div>
    return (
    <div className=''>



<div className="hero min-h-screen" >
<img src={banner} alt="" />

  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
      <div>
      <form>   
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#6fd18c] focus:border-[#57d37c] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#61d383] dark:focus:border-[#66c783]" placeholder="Search..." required/>
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#4fbf70] hover:bg-[#4fbf70] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#53c074] dark:hover:bg-[#34a756] dark:focus:ring-[#4fbf70]">Search</button>
          </div>
      </form>
      </div>
    

    </div>
  </div>
</div>

 </div>
    );
};

export default Banner;
