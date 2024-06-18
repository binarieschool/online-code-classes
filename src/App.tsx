import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Course from "./components/Course.tsx";
import { useCourse } from "./hooks/UseCourse.ts";
useCourse;

function App() {

  const {data, cart, addToCart, addQuantity, lessQuantity, removeCourses, clearCart, isEmptyCart, totalPay } = useCourse();

  return (
    <>
      <Header 
        cart={cart}
        addQuantity={addQuantity}
        lessQuantity={lessQuantity}
        removeCourses={removeCourses}
        clearCart={clearCart}
        isEmptyCart={isEmptyCart}
        totalPay={totalPay}
        />
      <main className="container-xl mt-5">
        <h2 className="text-center">Choose your favorite languages</h2>

        <div className="row mt-5">
          
          {/* We generate as many components as there are items in the db array */}
          {data.map((course)=>
            <Course 
              // Warning: Each child in a list should have a unique "key" prop.
              key={course.id}
              course={course}
              addToCart={addToCart}/> 
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
