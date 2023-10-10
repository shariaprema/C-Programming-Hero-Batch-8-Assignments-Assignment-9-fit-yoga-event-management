import pic1 from "../../assets/live/live.jpg"
const LiveEvent = () => {
    return (
        <div>

             <div className="pt-20 pb-10 mx-auto text-center">
            <h2 className=" text-4xl font-bold text-[#4fbf70] ">Upcoming LIVE Training</h2>
            <div className="max-w-lg flex justify-center items-center mx-auto mt-2 ">
            <p className="text-sm font-normal text-slate-700 block">Join with Us</p>
            </div>
            </div>
         
            <div className="relative lg:flex md:flex mx-auto w-full md:h-full lg:h-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 lg:w-1/2 md:w-2/5  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                src={pic1}
                alt="image"
                className="h-full w-full object-cover absolute bg-center"
                />
                {/* ---- */}
                <div className="card glass w-[300px] h-[150px] relative top-40 text-white mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Online</h2>
                    <p>October 23 – November 21, 2023</p>
                    <div className="card-actions justify-end">
                
                    </div>
                </div>
                </div>
                {/* ---- */}
            </div>
            <div className="p-6">
                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                14hr Live Online
                Pranayama Event!!
                </h6>
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Are you interested in learning the physiological mechanisms behind the pranayama practices?
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                This ‘first of its kind’ Event illustrates both the research & science alongside the traditional pranayama practices so you can individualize these practices for your students. We’ll dig deep into the anatomy & physiology behind the techniques so you understand how to individualize and apply this information in a event setting. We’ll map out the yoga applications, progressions, cueing, supportive MFR practices, and other nuances to get the most out of these practices.
                </p>
                <a className="inline-block" href="#">
                <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Enroll Now!
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                    </svg>
                </button>
                </a>
            </div>
            </div>
            
        </div>
    );
};

export default LiveEvent;

