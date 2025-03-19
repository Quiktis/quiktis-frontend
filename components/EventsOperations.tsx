import React from 'react';
import { FaPlus, FaCog, FaChartBar, FaBell } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const operations = [
    {
        title: "Create Event",
        icon: <FaPlus size={24} />,
    },
    {
        title: "Manage Event",
        icon: <FaCog size={24} />,
    },
    {
        title: "Sales Analytics",
        icon: <FaChartBar size={24} />,
    },
    {
        title: "Send Updates",
        icon: <FaBell size={24} />,
    },
];

const   EventsOperations = () => {
  return (
    <div className="grid grid-cols-[repeat(2,1fr)] h-[252px] shrink-0 justify-center w-full items-center">
      {operations.map((op, index) => (
        <Button
          key={index}
          onClick={() => {''}}
          className="w-[215px] h-[100px] rounded-[20px] bg-primary
            flex leading-none items-center justify-center gap-3 
         hover:bg-black transition-all text-[16px] duration-300"
        >
          {op.icon}
          <span className="text-lg font-medium">{op.title}</span>
        </Button>
      ))}
    </div>
  );
};

export default EventsOperations;