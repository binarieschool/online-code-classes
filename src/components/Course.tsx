import type {CourseDB} from "../types/type.ts";

type dbProps = {
  course:CourseDB;
  addToCart: (item: CourseDB) => void;
}

export default function Course({course, addToCart} : dbProps) {

  const {image, name, description, price} = course;

    // const handleClick = (id) => {
    //   console.log("Click..."+id)
    // }


    // ================= //
    // ADD ITEMS TO CART //
    // ================= //

    // ***** First way to do it ***** //
    // ***************************** //

    // I do it through a function. handleClick

    /* const handleClick = (course) => {
        setCart([...cart, course]);
    }*/

    // ################################################## //

    // ***** Second way to do it ***** //
    // ******************************* //

    // export default function Course({course, cart, setCart})
    // I directly pass the setCart function to the <button> 

    /*
    <button 
      onClick={() => setCart([...cart, course])} 
    >
    Add this course
    </button>
    */

   // ***** Third way to do it ***** //
   // ****************************** //
   
   /*

   NOTE: In the Course.jsx file
    // We do not export the State cart
    // export default function Course({course, setCart})

    <button 
      onClick={() => setCart((prevState)=>[...prevState, course])}
      // NOTE: The prevState variable knows what the State cart contains
    >
    Add this course
    </button>
    
    NOTE: In the App.jsx file
     {data.map((course)=>
        <Course 
        key={course.id}
        course={course}
        cart={cart}  // We eliminate the State cart
        setCart={setCart}/> 
      )}

   */
   
    return (
      <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
          <img
            className="img-fluid"
            src={`../img/${image}.png`}
            alt="Code image"
          />

        {
        /* IMPORTANT: 
            Files in the public directory are served at the root path.
            Instead of /public/img/image.png, use /img/image.png.*/ 
        }

        </div>
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p>
            {description}
          </p>
          <p className="fw-black text-primary fs-3">€{price} (1h)</p>
          <button 
            type="button" 
            className="btn btn-dark w-100"
            onClick={() => addToCart(course) }
          >
          Add this course
          </button>

          {
          /* IMPORTANT: onClick={eventClick(id)}  
             Calls the entire function, does not 
             wait for the event */

          /* IMPORTANT: onClick={()=> eventClick(id)}  
             Wait for the event to occur */
          }
        </div>
      </div>
    );
  }