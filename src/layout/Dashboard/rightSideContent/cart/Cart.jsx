import { FaTrash } from "react-icons/fa";
import Title from "../../../../components/title/Title";
import { useCart } from "../../../../hooks/api/api";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/api/useAxios";

const Cart = () => {
  const { isLoading, error, cart, refetch } = useCart();
  const axios = useAxios();

  if (isLoading) return "loading...";
  if (error) return "error";

  const totalPrice = cart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wan't to delete this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`cart/${id}`).then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
        } catch (err) {
          console.log(err);
        } 
      }
    });
  };

  return (
    <section className="bg-[#F6F6F6] h-full overflow-y-hidden">
      <div className="max-w-5xl mx-auto py-12">
        <Title title={"WANNA ADD MORE?"} subTitle={"---My Cart---"}></Title>
        <div className=" bg-white px-12 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-text_color_primary">
              Total orders: {cart?.length}
            </h2>
            <h2 className="text-3xl font-bold text-text_color_primary">
              total price: ${totalPrice}
            </h2>
            <button className="uppercase btn btn-md text-white bg-primary_color">
              Pay
            </button>
          </div>
          <div className="overflow-x-auto overflow-y-scroll  h-[200px] mb-5">
            <table className="table  overflow-y-scroll ">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>
                      <img
                        className="h-10 w-10 object-cover"
                        src={item.image}
                        alt={`image of ${item.name}`}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td className="">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-md bg-red-500 text-white"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
