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



  // A single ticket
export type Ticket = {
  id: string;
  createdAt: string;           // ISO date string
  name: string;
  price: number;
  quantity: number;
  soldCount: number;
  isActive: boolean;
  saleStartDate: string | null;
  saleEndDate: string | null;
}

// Event category
export type Category = {
  id: string;
  name: string;
}

// Event organiser
export type Organiser = {
  id: string;
  name: string;
}

// The main Event type
export type Event = {
  id?: string;
  createdAt?: string;           // ISO date string
  title: string;
  slug?: string;
  description?: string;
  eventType?: "single" | "recurring" | string;  // adjust union as needed
  accessType?: "paid" | "free" | string;        // adjust union as needed
  startDate: string;            // ISO date string
  endDate?: string;              // ISO date string
  startTime: string;            // e.g. "04:09 AM"
  endTime?: string;              // e.g. "06:06 AM"
  location?: string;
  bannerImage?: string;          // URL
  isPublished?: boolean;
  status?: "draft" | "published" | string;      // adjust union as needed
  updatedAt?: string;           // ISO date string
  category?: Category;
  organiser?: Organiser;
  tickets?: Ticket[];
}
