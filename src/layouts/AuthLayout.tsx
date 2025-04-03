import { Outlet } from "react-router-dom";
import tecnoparque from '../assets/images/tecnoparque.jpeg';
const AuthLayout = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 mt-8 md:mt-0 h-full">
          <Outlet />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center h-full">
          <img src={tecnoparque} alt="Slide" className="w-full h-full object-cover rounded-l-[50px]" />
        </div>
      </div>
    </div>
  );
};


export default AuthLayout;
