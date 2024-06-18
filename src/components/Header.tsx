import type {CartItem} from "../types/type.ts";

type HeaderProps = {
  cart: CartItem[];
  addQuantity: (id: number) => void;
  lessQuantity: (id: number) => void;
  removeCourses: (id: number) => void;
  clearCart: () => void;
  isEmptyCart: boolean;
  totalPay: number;
}

export default function Header({ cart, addQuantity, lessQuantity, removeCourses, clearCart, isEmptyCart, totalPay } : HeaderProps) {

/* Important Note:
 
  With this, we are creating two hooks with the same name in two different components, meaning the state would not be synchronized

  const { totalPay,  } = useCourse();
*/  

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="my-cart">
              <img
                className="img-fluid"
                src="./img/cart.png"
                alt="Cart image"
              />

              <div id="my-cart" className="bg-white p-3">
              { isEmptyCart ? <p id="msn" className="text-center">Empty Cart</p> : 
                <>
                <table className="w-100 table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Course</th>
                      <th>Price</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                  <tbody>

                    {cart.map( course => (

                    <tr key={course.id}>
                      <td>
                        <img
                          className="img-fluid"
                          src={`./img/${course.image}.png`}
                          alt={`${course.name} image`}
                        />
                      </td>
                      <td>{course.name}</td>
                      <td className="fw-bold">€{course.price}</td>
                      <td className="flex align-items-start gap-4">
                        <button type="button" className="btn btn-dark" onClick={() => lessQuantity(course.id)}>
                          -
                        </button>
                        {course.counter}
                        <button type="button" className="btn btn-dark" onClick={() => addQuantity(course.id)}>
                          +
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger" type="button"  onClick={() => removeCourses(course.id)}>
                          X
                        </button>
                      </td>
                    </tr>
                    ))}

                  </tbody>
                </table>
             
                <p className="text-end">
                  Total: <span className="fw-bold">€{totalPay}</span>
                </p>
                </>
                }
                { isEmptyCart ? "":
                <>
                  <button className="btn bg-green w-100 mt-3 p-2 text-white">
                    Pay now
                  </button>
                  <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>
                    Empty cart
                  </button>
                </>                
                }
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
