// ...existing code...

type OrderItem = {
  // Add properties based on your items array structure
  id?: string;
  quantity?: number;
  price?: number;
  ticketType?: string;
}

type OrderUser = {
  email: string;
}

type Order = {
  id: string;
  createdAt: string;
  totalPrice: string;
  status: 'paid' | 'pending' | 'failed';
  paymentMethod: string | null;
  paymentStatus: string | null;
  updatedAt: string;
  items: OrderItem[];
  user: OrderUser;
  event: Event | null;
}

type OrderResponseData = {
  order: Order;
}

type OrderResponse = {
  status: string;
  message: string;
  data: OrderResponseData;
}

// Export the types
export type { 
  Order,
  OrderItem,
  OrderUser,
  OrderResponse,
  OrderResponseData 
};