const styles = {
  // Layout
  boxWidth: "max-w-[1240px] mx-auto",
  container: "mx-auto px-4 sm:px-6 lg:px-8",

  // Headings
  heading1: "font-poppins font-semibold leading-5 w-full text-4xl sm:text-3xl",
  heading2: "font-poppins font-semibold text-3xl leading-5 w-full sm:text-2xl",
  heading3:
    "font-poppins font-semibold text-xl leading-5 w-full sm:text-xl sm:leading-5",
  heading4: "font-poppins font-semibold text-lg leading-5 w-full",

  // Text
  paragraph: "font-poppins text-lg sm:text-base",
  paragraphSec: "font-poppins text-base",
  caption: "font-poppins text-sm text-gray-600",

  // Buttons
  button:
    "px-8 py-3 border border-green-600 bg-green-600 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm text-lg font-semibold cursor-pointer hover:shadow-md ss:w-full my-4",
  buttonSec:
    "px-5 py-2.5 border border-green-600 bg-green-600 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm text-sm font-semibold cursor-pointer hover:shadow-md ss:w-full my-4",

  // Inputs
  input:
    "py-3.5 px-8 bg-transparent rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm text-base mr-3 font-poppins ss:w-full",
  inputError: "border-red-600 text-red-600",

  // Spacing
  marginX: "mx-4",
  marginY: "my-4",
  paddingX: "px-4",
  paddingY: "py-4",
  marginAuto: "mx-auto my-4",

  // Flex Utilities
  flexCol: "flex flex-col",
  flexRow: "flex flex-row",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex justify-between",

  // Borders
  border: "border-b-4 border-green-600",
  borderRounded: "border border-gray-300 rounded-lg",
  borderError: "border-red-600",

  // Backgrounds and Shadows
  bgWhite: "bg-white",
  bgGray: "bg-gray-100",
  shadow: "shadow-md",
  shadowLg: "shadow-lg",
  shadowHover: "hover:shadow-lg",

  // Utility Classes
  textCenter: "text-center",
  textRight: "text-right",
  hidden: "hidden",
  visible: "visible",
  overlay: "fixed inset-0 bg-black bg-opacity-50 z-50",

  // Animations
  transition: "transition ease-in-out duration-200",
  hoverScale: "transform hover:scale-105",
};

export default styles;
