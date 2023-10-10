import img1 from "../../../assets/team/team1.jpg"
import img2 from "../../../assets/team/team2.jpg"
import img3 from "../../../assets/team/team3.png"
const YogaInstructors = () => {
    return (
        <div>
            
            <div className="pt-20 pb-10 mx-auto text-center">
            <h2 className=" text-4xl font-bold text-[#4fbf70] ">Dedicated Team</h2>
            <div className="max-w-lg flex justify-center items-center mx-auto ">
            <p className="text-sm font-normal text-slate-700 block">Yoga Instructors</p>
            </div>
            </div>
            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto container">
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img className="h-full" src={img1} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Melinda Volovitz

                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                    Yoga Instructor
                    </p>

                    <p>Practicing yoga in 1994 and has never looked back.</p>
                    
                </div>
                
                </div>

            {/* ---------- */}

            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img className="h-full" src={img2} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Natalie Paisley
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                    CEO / Co-Founder
                    </p>
                    <p>Her teaching style is so light and accessible to all students.</p>
                </div>
             
                </div>

            {/* -------- */}
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img src={img3} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    KHRISTINA KROL Krist
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                    Yoga Instructor
                    </p>
                    <p>Practicing yoga in 2004 and has never looked back.</p>
                </div>
                
                </div>

            </div>
            
        </div>
    );
};

export default YogaInstructors;