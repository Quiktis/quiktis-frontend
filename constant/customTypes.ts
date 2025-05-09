export type EventData = {
    title: string;
    description: string;
    categoryId: string;
    eventType: string;
    accessType: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    location: string;
    bannerImage: string;
    
    tickets: {
      name: string;
      description: string;
      price: number;
      quantity: number;
    }[];
  };


  export type TimeData = {
    startTime: {
      hour: number | null;
      minute: number | null;
      period: "AM" | "PM" | null;
    };
    endTime: {
      hour: number | null;
      minute: number | null;
      period: "AM" | "PM" | null;
    };
  }