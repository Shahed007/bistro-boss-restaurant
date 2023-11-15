import { useForm } from "react-hook-form";
import signUpBanner from "../../assets/others/authentication.png";
import signImage from "../../assets/others/authentication2.png";
import Container from "../../components/Container/Container";
import Title from "../../components/title/Title";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section
      className=" "
      style={{
        backgroundImage: `url(${signUpBanner})`,
        backgroundSize: "cover",
      }}
    >
      <Container className="pt-10">
        <div className="flex md:flex-row flex-col items-center gap-6 w-full h-full bg-transparent shadow-md shadow-gray-400 p-6">
          <div className="flex-1 flex flex-col justify-center items-center w-full">
            <div className="md:max-w-sm w-full md:mx-auto">
              <Title
                title="Sign Up"
                className="border-transparent -mb-5 font-inter font-bold"
              ></Title>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="font-inter w-full space-y-4"
              >
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="name"
                    className="text-3xl font-semibold text-text_color_primary"
                  >
                    Name
                  </label>
                  <input
                    className=" block p-3 rounded-md shadow border border-gray-50 focus:outline focus:outline-primary_color"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="email"
                    className="text-3xl font-semibold text-text_color_primary"
                  >
                    Email
                  </label>
                  <input
                    className=" block p-3 rounded-md shadow border border-gray-50 focus:outline focus:outline-primary_color"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label
                    htmlFor="password"
                    className="text-3xl font-semibold text-text_color_primary"
                  >
                    Password
                  </label>
                  <input
                    className=" block p-3 rounded-md shadow border border-gray-50 focus:outline focus:outline-primary_color"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <input
                  type="submit"
                  className="block w-full p-2 active:scale-95 duration-200 hover:bg-transparent hover:text-primary_color border-2 border-transparent hover:border-primary_color cursor-pointer rounded-lg text-xl font-bold text-white bg-primary_color"
                  value="Sign Up"
                />
              </form>
              <div className="flex flex-col justify-center items-center mt-8">
                <p className="text-primary_color font-inter font-medium">
                  Already registered? Go to{" "}
                  <Link className="text-text_color_primary">log in</Link>
                </p>
                <p className="mt-6 text-xl font-inter font-medium">
                  Or sign up with
                </p>
                <div className="mt-8 flex gap-12">
                  <button className="h-10 w-10 border-2 border-text-[#444444] duration-200 active:scale-95 rounded-full flex justify-center items-center">
                    <FaFacebookF />
                  </button>
                  <button className="h-10 w-10 border-2 border-text-[#444444] duration-200 active:scale-95 rounded-full flex justify-center items-center">
                    <FaGoogle />
                  </button>
                  <button className="h-10 w-10 border-2 border-text-[#444444] duration-200 active:scale-95 rounded-full flex justify-center items-center">
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={signImage} alt="sign up image" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignUp;
