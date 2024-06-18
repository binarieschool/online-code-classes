export type CourseDB = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }

  export type CartItem = CourseDB & { // Inherit using: type
    counter: number;
  }

  /*
  export interface CartItem extends CourseDB { // Inherit using: Interface 
    counter: number;
  }
  */
