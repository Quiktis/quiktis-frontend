import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  time: string;
  image: string;
  readMoreLink: string;
  ticketLink: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Africa's fashion industry",
    location: "Lagos, Nigeria",
    date: "May 23, 2024",
    time: "13:20",
    image: "/africa.png",
    readMoreLink: "#",
    ticketLink: "#",
  },
  {
    id: 2,
    title: "Carbonite web goalkeeper",
    location: "Lagos, Nigeria",
    date: "May 14, 2024",
    time: "9:30",
    image: "/africa.png",
    readMoreLink: "#",
    ticketLink: "#",
  },
  {
    id: 3,
    title: "Davido Live Concert",
    location: "Ontario, Canada",
    date: "May 23, 2024",
    time: "13:20",
    image: "/africa.png",
    readMoreLink: "#",
    ticketLink: "#",
  },
  {
    id: 4,
    title: "Carbonite web goalkeeper",
    location: "Lagos, Nigeria",
    date: "May 14, 2024",
    time: "9:30",
    image: "/africa.png",
    readMoreLink: "#",
    ticketLink: "#",
  },
];

interface ComingUpNextProps {
  containerClass?: string;
}
const ComingUpNext: React.FC<ComingUpNextProps> = ({containerClass}) => {
  return (
    <section className={`relative py-10 overflow-hidden ${containerClass}`}>

      <div className="relative z-10 container mx-auto text-white">
        <h2 className="text-2xl font-semibold mb-6">Coming Up Next</h2>

        <div className="space-y-4">
          {events.map((event) => (

            <div
              key={event.id}
              className="grid flex-wrap lg:grid-cols-2 xl:grid-cols-[0.9fr_0.5fr_1fr] gap-4 items-center p-4 border border-gray-800 rounded-[5px] bg-transparent">
              {/* Left */}
              <div className="flex gap-3 w-fit">
                <div className="relative w-24 h-24 rounded-[5px] overflow-hidden flex-shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                </div>
                <div className="my-auto">
                <h3 className="text-[#ff4d2a] font-semibold text-sm md:text-base lg:text-lg leading-2">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  {event.location}
                </p>
                <p className="text-gray-400 text-xs md:text-sm">{event.time}</p>
                </div>
              </div>

              <div className="hidden xl:flex justify-center"><p className="  text-white md:text-sm">{event.date}</p></div>



              {/* Right */}
              <div className="flex justify-center gap-4 md:grid grid-cols-2 max-sm:flex-col sm:flex-col">
                

                <a
                  href={event.readMoreLink}
                  className="lg:w-fit border border-gray-700 text-gray-400 hover:text-white rounded-[5px] text-xs md:text-sm  py-4 px-8 flex justify-center">
                  Read more <FiArrowRight className="h-4 w-4 ml-1 mt-[0.2em]" />
                </a>
             
                <div>

                <a
                  href={event.ticketLink}
                  className="bg-[#ff4d2a] lg:w-fit hover:bg-[#ff4d2a]/90 text-white font-semibold rounded-[5px] text-xs md:text-sm py-4 px-8 flex justify-center lg:mr-0 lg:ml-auto">
                  GET TICKET
                  <FiArrowRight className="h-4 w-4 ml-1 transform rotate-45" />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingUpNext;
