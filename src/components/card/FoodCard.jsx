import PropTypes from "prop-types";
import useAuth from "../../hooks/api/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/api/useAxiosPublic";
import toast from "react-hot-toast";
import { useCart } from "../../hooks/api/api";

const FoodCard = ({ food }) => {
  const { name, recipe, image, category, price } = food || {};
  const { user } = useAuth();
  const { refetch } = useCart();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleAddToCart = async () => {
    if (!user) {
      Swal.fire({
        title: "You need to purchase",
        text: "At first login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Take me login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }

    const cart = {
      user_email: user?.email,
      name,
      recipe,
      image,
      category,
      price,
    };

    const res = await axiosPublic.post("cart", cart);
    console.log(res.data);
    if (res?.data.insertedId) {
      refetch();
      toast.success("Item added cart successfully");
    }
  };
  return (
    <div className="bg-gray-50 font-inter rounded-md shadow-md overflow-hidden">
      <figure>
        <img className="w-full " src={image} alt={`image of ${name}`} />
      </figure>
      <div className="mt-8 flex justify-center items-center flex-col px-5 pb-5">
        <h3 className="text-text_color_primary font-semibold text-2xl">
          {name}
        </h3>
        <p className="text-sm text-center">{recipe.slice(0, 80)}...</p>
        <button
          onClick={handleAddToCart}
          className="mt-8 py-2 px-7  border-b-primary_color border-b-2 rounded-md uppercase duration-200 text-primary_color text-xl font-medium hover:bg-text_color_primary hover:border-b-text_color_primary hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};
