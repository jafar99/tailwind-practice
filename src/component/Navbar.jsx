import Switcher from "../Utils/Switcher";
import logo from "../assets/react.svg";


const Navbar = () => {
  return (
    
      <div className="flex justify-between items-center my-4 bg-gray-100 p-5 rounded-md mx-2  dark:bg-gray-800 ">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="w-96">
          <ul className="flex justify-around items-center text-xl font-normal dark:text-white">
            <li>home</li>
            <li>about</li>
            <li>blog</li>
            <li>contact</li>
            <li>
        <Switcher />

            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default Navbar;
