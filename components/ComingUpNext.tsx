
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
const ComingUpNext: React.FC<ComingUpNextProps> = ({ containerClass }) => {
  function capitalize(text: string) {
    // Ensure window is defined before accessing it
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      return isMobile ? text.toUpperCase() : text;
    }
    return text; // Return original text on server-side render
  }

  return (
    <section className={`relative py-10 overflow-hidden ${containerClass}`}>
      <div className="relative z-10 container mx-auto text-white">
        <h2 className="text-2xl font-semibold mb-6">Coming Up Next</h2>

        <div className=" hidden md:grid grid-cols-1 lg:grid-cols-1 gap-4">
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
                  <p className="text-gray-400 text-xs md:text-sm">
                    {event.time}
                  </p>
                </div>
              </div>

              <div className="hidden xl:flex justify-center">
                <p className="text-white md:text-sm">{event.date}</p>
              </div>

              {/* Right */}
              <div className="flex justify-center gap-4 md:grid grid-cols-2 max-sm:flex-col sm:flex-col">
                <a
                  href={event.readMoreLink}
                  className="lg:w-fit border border-gray-700 text-gray-400 hover:text-white rounded-[5px] text-xs md:text-sm py-4 px-8 flex justify-center">
                  Read more <FiArrowRight className="h-4 w-4 ml-1 mt-[0.2em]" />
                </a>

                <div>
                  <a
                    href={event.ticketLink}
                    className="bg-[#ff4d2a] lg:w-fit hover:bg-[#ff4d2a]/90 text-white font-semibold rounded-[5px] text-xs md:text-sm py-4 px-8 flex justify-center lg:mr-0 lg:ml-auto">
                    GET TICKET{" "}
                    <FiArrowRight className="h-4 w-4 ml-1 transform rotate-45" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hide-srollbar-container md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide max-md:py-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="snap-start max-md:bg-[#77777717] flex-shrink-0 w-[80%] max-md:w-[20em] border border-gray-800 rounded-[5px] bg-transparent p-4 max-md:py-7 max-md:px-6">
              {/* Left */}
              <div className="flex gap-3 w-fit mb-2 max-sm:grid grid-cols-2 max-md:pt-[1.2em]">
                <div className="relative w-24 h-24 rounded-[5px] overflow-hidden flex-shrink-0 max-sm:w-full max-sm:h-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="my-auto">
                  <h3 className="text-[#ff4d2a] font-semibold text-sm md:text-base lg:text-lg max-md:leading-7 leading-2 max-sm:text-[1.3em]">
                    {capitalize(event.title)}
                  </h3>
                  <p className="text-gray-400 max-md:text-white text-[0.95em]  md:text-sm">
                    {event.location}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {event.time}
                  </p>
                </div>
              </div>

              {/* Middle*/}
              <div className="mb-2 max-sm:hidden">
                <p className="text-white text-sm">{event.date}</p>
              </div>

              {/* Right*/}
              <div className="flex flex-col-reverse gap-3 w-[80%] mx-auto max-sm:mt-[1.4em]">
                <a
                  href={event.readMoreLink}
                  className="border border-gray-700 text-gray-400 hover:text-white rounded-[5px] text-xs md:text-sm py-2 px-4 flex justify-center">
                  Read more <FiArrowRight className="h-4 w-4 ml-1" />
                </a>

                <a
                  href={event.ticketLink}
                  className="bg-[#ff4d2a] hover:bg-[#ff4d2a]/90 text-white font-semibold rounded-[5px] text-xs md:text-sm py-2 px-4 flex justify-center">
                  GET TICKET{" "}
                  <FiArrowRight className="h-4 w-4 ml-1 transform rotate-45" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingUpNext;
