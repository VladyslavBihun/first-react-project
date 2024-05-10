// export const Product = ({
//   name,
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   price,
// }) => (
//   <div>
// 		<h2>{name}</h2>
//     <img src={imgUrl} alt={name} width="480" />
//     <p>Price: {price} credits</p>
//   </div>
// );

// ! product props.children

// export const Product = ({ name, imgUrl, price, children }) => (
//   <div>
//     <h2>{name}</h2>
//     <img src={imgUrl} alt={name} width="480" />
//     <p>Price: {price} credits</p>
//     {children}
//   </div>
// );

// ! prop-types

// import PropTypes from 'prop-types';

// export const Product = ({
//   name,
//   imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//   price,
// }) => (
//   <div>
// 	<img src={imgUrl} alt={name} width="480" />
// 	<h2>{name}</h2>
//     <p>Price: {price} credits</p>
//   </div>
// );

// // Опис типів пропсів компонента 
// Product.propTypes = {
//   name: PropTypes.string.isRequired,
//   imgUrl: PropTypes.string,
//   price: PropTypes.number.isRequired,
// };
