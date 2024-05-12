// src/components/Alert.jsx

// ! вбудовані стилі
// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
// };

// const getBgColor = variant => {
//     switch (variant) {
//         case "info":
//             return "blue";
//         case "success":
//             return "green";
//         case "error":
//             return "red";
//         case "warning":
//             return "orange";
//         default:
//             throw new Error(`Unsupported variant prop value - ${variant}`);
//     }
// };

// export const Alert = ({ variant, children }) => {
//     return (
//         <p
//             style={{
//                 ...alertStyles,
//                 backgroundColor: getBgColor(variant),
//             }}
//         >
//             {children}
//         </p>
//     );
// };

// ! Ванільний CSS

// src/components/Alert.jsx

// import "./Alert.css";

// export const Alert = ({ children }) => {
//   return <p className="alert">{children}</p>;
// };

// ! Композиція класів

// import "./Alert.css";

// // src/components/Alert.jsx

// import "./Alert.css";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];

//   if (outlined) {
// 		classNames.push("is-outlined");
// 	}

//   if (elevated) {
// 		classNames.push("is-elevated");
// 	}

//   return <p className={classNames.join(" ")}>{children}</p>;
// };

// ! Бібліотека clsx

// src/components/Alert.jsx

// import clsx from "clsx";
// import "./Alert.css";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

//! модульність CSS

// import clsx from "clsx";
// import css from "./Alert.module.css";

// // console.log(css); // { alert: "Alert_alert_ax7yz" }

// export const Alert = ({ variant, children }) => {
//   return <p className={clsx(css.alert, css[variant])}>{children}</p>;
// };

// ! Властивість composes

// src/components/Alert.jsx

// import css from "./Alert.module.css";

// export const Alert = ({ variant, children }) => {
//   return <p className={css[variant]}>{children}</p>;
// };


// ! Властивість composes бібліотека clsx

import clsx from "clsx";
import css from "./Alert.module.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

