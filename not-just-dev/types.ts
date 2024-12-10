export type Product = {
    id: number;
    image: string | null; // URL of the image
    name: string;         // Name of the person
    status: 'online' | 'offline'; // Online or offline status
    description: string;
  };
  
  export type PizzaSize = 'S' | 'M' | 'L' | 'XL';
  
  // export type CartItem = {
  //   id: string;
  //   product: Product;
  //   product_id: number;
  //   size: PizzaSize;
  //   quantity: number;
  // };
  
  export type CardItemT = {
    description?: string;
    hasActions?: boolean;
    hasVariant?: boolean;
    image: any;
    isOnline?: boolean;
    matches?: string;
    name: string;
  };
  
  export type IconT = {
    name: any;
    size: number;
    color: string;
    style?: any;
  };
  
  export const OrderStatusList: OrderStatus[] = [
    'New',
    'Cooking',
    'Delivering',
    'Delivered',
  ];
  
  export type OrderStatus = 'New' | 'Cooking' | 'Delivering' | 'Delivered';
  
  export type Order = {
    id: number;
    created_at: string;
    total: number;
    user_id: string;
    status: OrderStatus;
  
    order_items?: OrderItem[];
  };
  
  export type OrderItem = {
    id: number;
    product_id: number;
    products: Product;
    order_id: number;
    size: PizzaSize;
    quantity: number;
  };
  
  export type Profile = {
    id: string;
    group: string;
  };
  