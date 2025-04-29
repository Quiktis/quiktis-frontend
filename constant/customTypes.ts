export type EventData = {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    eventType: string;
    accessType: string;
    bannerImage: string;
    category: string;
    location: string;
    tickets: {
      name: string;
      price: string;
      currency: string;
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