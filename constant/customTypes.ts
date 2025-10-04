// Time-related types
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

export type TimeUnit = {
  hour: number | null
  minute: number | null
  period: "AM" | "PM" | null
}

// Ticket types
export type TicketData = {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

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

// Event creation/form data (for creating new events)
export type EventData = {
  title: string;
  description: string;
  categoryId?: string | any;
  eventType: "single" | "recurring";
  accessType: "paid" | "free";
  startDate: string;            // ISO date string
  endDate: string;              // ISO date string
  startTime: string;            // e.g. "04:09 AM"
  endTime: string;              // e.g. "06:06 AM"
  location: string;
  bannerImage: string;
  tags?: string[];              // Optional tags array
  tickets: TicketData[];
}

// Full Event type (from database/API responses)
export type Event = {
  id: string;
  createdAt: string;            // ISO date string
  updatedAt: string;            // ISO date string
  title: string;
  slug: string;
  description: string;
  eventType: "single" | "recurring";
  accessType: "paid" | "free";
  startDate: string;            // ISO date string
  endDate: string;              // ISO date string
  startTime: string;            // e.g. "04:09 AM"
  endTime: string;              // e.g. "06:06 AM"
  location: string;
  bannerImage: string;          // URL
  isPublished: boolean;
  status: "draft" | "published";
  tags?: string[];              // Optional tags array
  
  // Related entities
  category: Category;
  organiser: Organiser;
  tickets: Ticket[];
}

// Partial Event type (for updates where not all fields are required)
export type EventUpdate = Partial<Omit<EventData, 'tickets'>> & {
  id: string;
  tickets?: TicketData[];
}




export type NewTicket = {
  name: string
  description: string
  price: number
  quantity: number
}

export type NewEventData = {
  eventName: string
  description: string
  startDate: Date | null   // yyyy-mm-dd
  endDate: Date | null
  startTime: TimeUnit | null  // HH:mm
  endTime: TimeUnit | null
  location: string
  eventType: "paid" | "free" | string
  coverImage?: File | null | string | any
  eventTheme?: string
  approvalRequired?: boolean
  eventCapacity?: number
  tickets?: NewTicket[]
}