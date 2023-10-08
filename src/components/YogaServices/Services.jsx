import ServicesCards from "./ServicesCards";

const Services = ({services}) => {
    return (
        <div>
                <h2>Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto my-2">
                {
                    services.map((service) => <ServicesCards key={service.id} service={service}></ServicesCards>)
                }
            </div>
        </div>
    );
};

export default Services;

