import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db";
import type {CourseDB, CartItem} from "../types/type";

// ***** FIRST OPTION: Custom Hook Returns an Array ***** //
/* export function useCourse() {

    const name = "Python";
    const price = 20;

    return [ // Returns the positions [0]=name, [1]=price
        name, price
    ]
    
}*/

// ***** SECOND OPTION: Custom Hook Returns an Object ***** //
export function useCourse() {

      /** EXAMPLE: Custom Hook, returns an Array
       *       
       * const [name, price] = useCourse();
       * // [0] = name
       * // [1] = price
       * console.log(name); // Res. Python
       * 
       * const [price, name] = useCourse();
       * 
       * // [0] = price, but her value is Python
       * // [1] = name, but her value is 20
       * console.log(price); // Res. Python
       */

      // *************** File: App.jsx *************** //

      const saveDataCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem("cart");
        if (localStorageCart){
          return JSON.parse(localStorageCart);  // Return what is in localStorage
        }
        return []; // localStorage has nothing, returns empty array
      }

      // Max and Min hours, for the courses
      const MAX_HOURS = 8;
      const MIN_HOURS = 1;

      // Hooks must go at the top of the component
      const [data] = useState(db);
      const [cart, setCart] = useState(saveDataCart);
      // const [cart, setCart] = useState([]); // When refreshing, the shopping cart data is lost


      // We save the courses in the cart with localstorage, using useEffect
      useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart])

      function addToCart(item : CourseDB) {

        /* We check if an item in the cart already exists: 
            -1 (No exist) 
            >0 (Yes exist)
        */
        const itemExists = cart.findIndex( course => course.id == item.id)

        if (itemExists >= 0) { 
          console.warn(`The course ${item.name} exists`);

          /* 

          // NOTE IMPORTANT: Every time we click addCourseCart, the number 
          // of hours of the chosen course increases
           
          // const cartUpdate = [...cart]; // We create a copy of the cart
          // cartUpdate[itemExists].counter++;
          // console.log(cartUpdate)
          // setCart(cartUpdate);

           */ 
          
        }
        else { // The element does not exist, I add it
          console.log(`Added the ${item.name} course to the cart`);
          
          // we add a property to the object
          const itemCount : CartItem = {...item, counter : 1}
          setCart([...cart, itemCount]);
        }
      }  

      function addQuantity(id : CourseDB["id"]) {
        // console.log("add..."+id)
        const updateCartAdd = cart.map(item => {
          if( (item.id === id) && (item.counter < MAX_HOURS) ){
            return {
              ...item,
              counter: item.counter + 1
            }
          }
          return item;
        });

        // updateCartAdd;
        setCart(updateCartAdd);
      }
      
      function lessQuantity(id : CourseDB["id"]) {
        // console.log("less..."+id);
        const updateCartLess = cart.map(item => {
          if( (item.id === id) && (item.counter > MIN_HOURS) ){
            return {
              ...item,
              counter: item.counter - 1
            }
          }
          return item;
        });

        // updateCartLess;
        setCart(updateCartLess);
      }

      function removeCourses(id : CourseDB["id"]) {
        // console.log("Remove..."+id);
        setCart(prevState => prevState.filter(course => course.id !== id))
      }

      function clearCart() {
        setCart([]);
    }


       // *************** File: Header.jsx *************** //

         /***** Total to pay ( First way to do it ) *****/

  // const totalPay = () => {  // ( Within useMemo )
  //   let total = 0;
  //   for (let i = 0; i < cart.length; i++) {   
  //     total = total + (cart[i].counter * cart[i].price);
  //   }
  //   return total;
  // };

  const totalPay = useMemo( () => {  // ( With useMemo ) Best performance
    let total = 0;
    for (let i = 0; i < cart.length; i++) {   
      total = total + (cart[i].counter * cart[i].price);
    }
    return total;
  }, [cart]);

    /***** Total to pay ( Second way to do it ) *****/
    
    // const totalPay = () => cart.reduce((total, item) => total + (item.counter * item.price), 0);

  /*
   * Derived State
   * Return true o false
   *  
   */ 
  const isEmptyCart = useMemo( ()=> cart.length === 0, [cart]);  // Best performance
  // const isEmptyCart = ()=> cart.length === 0;

    return { // Returns the names
        data, 
        cart, 
        setCart,
        addToCart,
        addQuantity,
        lessQuantity,
        removeCourses,
        clearCart,
        totalPay,
        isEmptyCart
    }
}