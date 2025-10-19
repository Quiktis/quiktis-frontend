export type Role = "user" | "organizer";

//user
export interface User {
  id: string;
  email?: string;
  name?: string;
  age?: number;
  role?: Role;
  picture?: string;
  emailVerified?: boolean;
  location?: string;
  socialLinks?: string[];
  provider?: string;
}
export interface AllUsers extends Response {
  data: {
    users: User[];
  };
}
//auth
export type Response = {
  status: string;
  message: string;
};

export interface SignUp {
  email: string;
  password: string;
  name: string;
  age?: number;
  profilePicture?: string;
  location?: string;
}

export interface Ticket {
  id?: string | null;
  createdAt?: string;       
  name: string
  price: number
  description?: string
  quantity: number
  soldCount?: number
  isActive?: boolean
  saleStartDate?: string | null
  saleEndDate?: string | null
}

export interface CreateEventData {
  eventName: string;
  description: string;
  startDate: string;
  endDate: string;
    startTime: string;
    endTime: string;
    location: string;
    eventType: "paid" | "free";
    coverImage?: string;
    eventTheme?: string
    approvalRequired?: boolean;
    eventCapacity?: number;
    tickets?: Ticket[];
}


export interface EventData {
  eventId: string;
      createdAt: string;
      updatedAt: string;
      eventName: string;
      slug: string;
      description: string;
      eventType: "free" | "paid";
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
      location: string;
      coverImage: string;
      eventTheme?: string | null;
      approvalRequired: boolean;
      eventCapacity: number | null;
      isPublished: boolean;
      status: "draft" | "published";
      deletedAt?: string | null;
      category?: {
        id: string;
        name: string;
      } | null;
      organiser: {
        id: string;
        name: string;
      };
      tickets: {
        id: string;
        createdAt: string;
        name: string;
        price: number;
        quantity: number;
        soldCount: number;
        isActive: boolean;
        saleStartDate?: string | null;
        saleEndDate?: string | null;
      }[];
}

export interface CreateEventResponse extends Response {
  data: {
    event: {
      id: string;
      createdAt: string;
      eventName: string;
      slug: string;
      description: string;
      eventType: "free" | "paid";
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
      location: string;
      coverImage?: string;
      eventTheme?: string | null;
      approvalRequired: boolean;
      eventCapacity: number | null;
      isPublished: boolean;
      status: "draft" | "published";
      deleteAt?: string | null;
      category?: {
        id: string;
        name: string;
      }
      tickets: Ticket[];
      organizer: {
        id: string;
        name: string;
        email?: string;
        picture?: string;
    }
  }
}
}


// ✅ Get all events
export interface GetAllEventsResponse extends Response {
  data: {
    events: EventData[];
    total: number;
    page: number;
    limit: number;
  };
}


export interface MediaUploadFile {
  url: string;
  cloudinaryUrl: string;
}

export interface MediaUploadResponse extends Response {
  data: {
    files: MediaUploadFile[];
  }
}


export interface SignupResponse extends Response {}
export interface Login {
  email: string;
  password: string;
}
export interface LoginInfo {
  user: User;
  token: string;
}
export interface LoginResponse extends Response {
  data: LoginInfo;
}
export interface InitiateResetPassword {
  email: string;
}
export interface InitiateResetPasswordResponse extends Response {}
export interface ResetPassword {
  token: string;
  new_password: string;
}
export interface ResetPasswordResponse extends Response {}
export interface GoogleCallback {
  code: string;
}
export interface GoogleInitiateData {
  url: string;
}

export interface GoogleInitiateResponse extends Response {
  data: GoogleInitiateData;
}
export interface GoogleCallbackResponse extends Response {
  data: {
    token: string;
  };
}

//Category
export interface Category {
  name: string;
  description: string;
  image: string;
}

//Events
//Images
//Order
export interface OrderItem {
  orderId: string;
  ticketId: string;
  quantity: number;
}
export interface UpdateOrderItem {
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
export interface InitiateOrder {
  eventId: string;
}
export interface CompleteOrder {
  orderId: string;
}
export interface UpdateOrder {
  status: string;
}
//Payment
//Reviews
export interface Review {
  eventId: string;
  rating: number;
  comment: string;
}
//Ticket Holders
export interface AdditionalInfo {
  dietaryRequirements: string;
  accessibilityNeeds: string;
}
export interface TicketHolder {
  orderItemId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  additionalInfo: AdditionalInfo;
}