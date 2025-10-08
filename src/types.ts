export type Role = "user" | "organizer";

//user
export interface User {
  id: string;
  createdAt: string;
  email: string;
  name: string;
  age: number;
  role: Role;
  picture: string;
  emailVerified: boolean;
  location: string;
  socialLinks: string[];
  provider: string;
  lastLogin: string;
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
  age: 10;
  role: Role;
  profilePicture: string;
  location: string;
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
