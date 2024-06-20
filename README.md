> [!WARNING]
> 🚧️ THIS REPOSITORY IS **UNDER CONSTRUCTION** !!! 🚧️

<p style='font-size:18px;'><span style='font-weight:bold'>&#128197;&nbsp;Last update:</span> 20 June - 2024</p> 

> [!NOTE]
> ***Online Code Classes*** is made from Juan de la Torre project, with some visual and code changes.

![Udemy](https://img.shields.io/badge/Udemy-EC5252?style=for-the-badge&logo=Udemy&logoColor=white) 
> ***Course***: React and TypeScript - The Complete Guide Creating +10 Projects  

***Changes made*** 👇🏻

| Original project | By: Melquiades H.R |
| ---------------- | ------------------ |
| ... | ... |
| ... | ... |
| ... | ... |
| ... | ... |

# Online Code Classes

## Badges 🎫

![badges2](https://img.shields.io/badge/Open%20Source-8A2BE2) &nbsp;&nbsp; ![badges3](https://img.shields.io/badge/status-%20developing-green)


## Table of Contents 📑

* [Description](#description)
* [Demo](#demo)
* [Install and Run](#install-run)
* [Built with](#built-with)
* [License](#license)
* [Author](#author)

<br/>

<h2 id="description">Description 🖋️</h2>

  > Purchase classes to learn to program online by choosing the hours with your teacher.

<h2 id="demo">Demo 💻</h2>

<br/>

![Image-Initial Online Code Clases](https://drive.google.com/uc?export=view&id=1D__aKunApBsjs4B2hREVXumKWuIcyBZ6)


> Main image of the "Online Code Classes" project

<br/>

![Image-Cart Online Code Clases](https://drive.google.com/uc?export=view&id=1GWlxF5h3jh9XWkZlQhh7CWshuhCZYqYz)

> Modal window to manage the course shopping cart.

<br/>

<h2 id="install-run">Install and Run ⚙️</h2>

Project installation:

```bash
npm init
```

Run the project:

```bash
npm run dev
```

<br/>

<h2 id="built-with">Built with 🏗️</h2>

Technologies to build this project:

| Name | Version |
| ---- | ------- |
| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) | [HTML 5.3](/html) |
| ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) | [CSS3](/css) |
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | [ES2020](/javascript) |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) | [v18.12.1](/node) |
| ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | [React v18](/react) |
| ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | [5.2.2](/typescript) |
| ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) | [5.2.0](/Vite) |


Some code blocks from the project:

```javascript
export default function Footer() {
  return (
    <footer className="bg-dark mt-5 py-5">
      <div className="container-xl">
        <p className="text-white text-center fs-4 mt-4 m-md-0">
          Developed by Melquiades H.R.
        </p>
      </div>
    </footer>
  );
}
```
> Structure of the **"Footer"** component that includes the project

<br/>

```javascript
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
```
> Main component of the application ***"App"***

<br/>

<h2 id="license">License 📋</h2>

Free software license used to protect the rights of users and promote freedom in the use, modification and distribution of software.

  > GPL-3.0 license

<br/>

<h2 id="author">Author 🧑🏻‍💻</h2>

  > Melquiades H.R.

