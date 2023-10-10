

import Navbar from "../shared/Header/Navbar";

const Blog = () => {
    return (
        <div>

            <Navbar></Navbar>
            

            <div className="py-8 mx-auto text-center ">
            <h2 className=" text-4xl font-bold text-[#4fbf70]">Blog</h2>
           
            </div>


            <div className="grid mb-8 border  border-blue-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Yoga poses are like a canvas for self-expression. I guide students in painting their inner strength and peace through every pose</h3>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="w-30 h-30" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"></img>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Sarah Adams</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Yoga Instructor</div>
            </div>
        </figcaption>    
    </figure>
    
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Coordinating yoga events means appreciating the beauty and diversity of yoga poses. Each pose adds a unique brushstroke to the canvas of wellness.</h3>
            
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="w-30 h-30" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"></img>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Alex Turner</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Event Coordinator</div>
            </div>
        </figcaption>    
    </figure>

    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing yoga poses is a bit like storytelling. I help convey how each pose contributes to a narrative of health, balance, and mindfulness.</h3>
            
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="w-30 h-30" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"></img>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Emily Parker</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager</div>
            </div>
        </figcaption>    
    </figure>

    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">From mats to props, every yoga pose requires the right equipment. My role ensures participants have the tools they need to create their yoga masterpiece.</h3>
            
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="w-30 h-30" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"></img>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>David Lee</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Logistics Coordinator</div>
            </div>
        </figcaption>    
    </figure>

    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Yoga poses are like therapeutic brushstrokes, bringing balance and healing to the body and soul. I integrate them into holistic wellness.</h3>
            
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className=" w-30 h-30" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"></img>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Linda White</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Holistic Health Specialist</div>
            </div>
        </figcaption>    
    </figure>

    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
            
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="w-30 h-30" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"></img>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>John Smith</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Retreat Facilitator</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Yoga poses are like therapeutic brushstrokes, bringing balance and healing to the body and soul. I integrate them into holistic wellness.</h3>
         
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="w-30 h-30" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"></img>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Event Coordinator</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
            <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="w-30 h-30" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"></img>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Event Coordinator</div>
            </div>
        </figcaption>    
    </figure>
            </div>

           
        </div>
    );
};

export default Blog;
