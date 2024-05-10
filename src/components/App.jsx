// ! product

// import { Product } from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />

//     </div>
//   );
// }

// ! product props.children

// import { Product } from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       >
//         <p>Delicious and zesty tacos served with lime!</p>
//       </Product>

//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       >
//         <p>Classic combination of fries and burger!</p>
//       </Product>
//     </div>
//   );
// }

// ! books id

// const favoriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map((book) => {
//         return <li key={book.id}>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

// export default function App() {
//   return (
//     <>
// 			<h1>Books of the week</h1>
//       <BookList books={favoriteBooks} />
//     </>
//   );
// }

// ! books index

// const favoriteBooks = [
//   { name: "JS for beginners" },
//   { name: "React basics" },
//   { name: "React Router overview" }
// ];

// const BookList = ({ books }) => (
//   <ul>
// 		{books.map((book, index) => {
// 		return <li key={index}>{book.name}</li>;
// 		})}
//   </ul>
// );

// export default function App() {
//   return (
//     <>
// 			<h1>Books of the week</h1>
//       <BookList books={favoriteBooks} />
//     </>
//   );
// }


