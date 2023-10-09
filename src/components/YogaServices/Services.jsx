import ServicesCards from "./ServicesCards";

const Services = ({services}) => {
    return (
        <div>
            <div className="py-8 mx-auto text-center ">
            <h2 className=" text-4xl font-bold text-[#4fbf70]">Our Services</h2>
            <div className=" mx-44">
            <p className="text-sm  font-normal text-slate-700 block">Elevate your yoga journey with our expertly organized yoga events. From retreats to workshops and festivals, we curate immersive experiences that deepen your practice. Join us for transformative gatherings in serene settings, guided by experienced instructors.</p>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto my-2">
                {
                    services.map((service) => <ServicesCards key={service.id} service={service}></ServicesCards>)
                }
            </div>
        </div>
    );
};

export default Services;

