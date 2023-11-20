import {
  FaCalendarAlt,
  FaShoppingCart,
  FaStar,
  FaWallet,
} from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import useAuth from "../../../../hooks/api/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <section className="py-12 px-6">
      <h1 className="font-cinzel text-3xl font-semibold text-text_color_primary mb-6">
        Hi, Welcome Back!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-l from-[#FCDBFF] to-[#BB34F5] py-8 rounded-lg flex justify-center items-center gap-6">
          <FaWallet className="text-white text-3xl"></FaWallet>
          <div className="font-inter text-white">
            <h2 className="text-4xl font-bold">205</h2>
            <h5 className="text-lg">Menu</h5>
          </div>
        </div>
        <div className="bg-gradient-to-l from-[#FDE8C0] to-primary_color py-8 rounded-lg flex justify-center items-center gap-6">
          <AiTwotoneShop className="text-white text-3xl"></AiTwotoneShop>
          <div className="font-inter text-white">
            <h2 className="text-4xl font-bold">100</h2>
            <h5 className="text-lg">Shop</h5>
          </div>
        </div>
        <div className="bg-gradient-to-l from-[#FECDE9] to-[#FE4880] py-8 rounded-lg flex justify-center items-center gap-6">
          <LiaPhoneVolumeSolid className="text-white text-3xl"></LiaPhoneVolumeSolid>
          <div className="font-inter text-white">
            <h2 className="text-4xl font-bold">03</h2>
            <h5 className="text-lg">Contact</h5>
          </div>
        </div>
      </div>
      <div className="flex ">
        <div className="bg-[#FFEDD5] flex-1  flex flex-col justify-center items-center border-r-2 border-primary_color gap-8">
          <img
            className="h-20 w-20 rounded-full "
            src={user?.photoURL}
            alt={user?.displayName}
          />
          <h2 className="font-cinzel text-3xl font-semibold text-text_color_primary">
            {user?.displayName}
          </h2>
        </div>
        <div className="flex-1 px-8 py-8 bg-[#FEF9C3] space-y-8">
          <h2 className="text-4xl font-semibold font-cinzel text-text_color_primary uppercase">
            Your Activities
          </h2>
          <ul className="space-y-2 font-cinzel font-semibold text-2xl">
            <li className="flex gap-2 items-center text-[#0088FE]">
              <FaShoppingCart />
              <span>Orders: 6</span>
            </li>
            <li className="flex gap-2 items-center text-[#00C4A1]">
              <FaStar />
              <span>Reviews: 2</span>
            </li>
            <li className="flex gap-2 items-center text-[#FFBB28]">
              <FaCalendarAlt />
              <span>Bookings: 1</span>
            </li>
            <li className="flex gap-2 items-center text-[#FF8042]">
              <FaWallet />
              <span>Payment:3</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserHome;
