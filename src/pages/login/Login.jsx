import Container from "../../components/Container/Container";
import loginBanner from "../../assets/others/authentication.png";
import loginImage from "../../assets/others/authentication2.png";
import Title from "../../components/title/Title";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/api/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useAuth();
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const [logInErr, setLogInErr] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await login(email, password)
        .then((res) => {
          toast.promise(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                if (res?.user) {
                  resolve("Login successful!");
                  location?.state
                    ? navigate(location.state.form)
                    : navigate("/");
                } else {
                  reject(new Error("Invalid credentials"));
                }
              }, 1000);
            }),
            {
              loading: "Logging in...",
              success: (message) => message,
              error: (error) => error.message,
            }
          );
        })
        .catch((err) => {
          console.log(err.message);
          if (
            err.message === "Firebase: Error (auth/invalid-login-credentials)."
          ) {
            setLogInErr("Your email and password was invalid");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section
      style={{ backgroundImage: `url(${loginBanner})` }}
      className="h-full flex justify-center items-center"
    >
      <Container className="h-full w-full py-5 ">
        <div className="h-full w-full flex md:flex-row flex-col-reverse items-center gap-8 shadow-md bg-transparent rounded-md p-6">
          <div className="flex-1">
            <img src={loginImage} alt="login image" />
          </div>
          <div className="flex-1 w-full">
            <div className="md:max-w-sm w-full md:mx-auto text-text_color_secondary font-inter">
              <form
                onSubmit={handleLogin}
                className="w-full flex flex-col justify-center items-center"
              >
                <Title title="Login"></Title>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="email" className="text-xl font-bold">
                      Email
                    </label>
                    <input
                      name="email"
                      className=" block p-3 rounded-md shadow border border-gray-50 focus:outline focus:outline-primary_color"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="password" className="text-xl font-bold">
                      Password
                    </label>
                    <input
                      name="password"
                      className=" block p-3 rounded-md shadow border border-gray-50 focus:outline focus:outline-primary_color"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="password" className="text-xl ">
                      <LoadCanvasTemplate />
                    </label>
                    <input
                      name="captcha"
                      ref={captchaRef}
                      onClick={handleCaptcha}
                      className=" block p-3 rounded-md shadow border border-gray-50 focus:outline focus:outline-primary_color"
                      type="text"
                      placeholder="Enter captcha"
                    />
                  </div>
                  <p
                    className={`${
                      logInErr
                        ? "text-red-500 my-3 text-sm font-medium"
                        : "hidden"
                    }`}
                  >
                    {logInErr}
                  </p>
                  <button
                    disabled={disabled}
                    type="submit"
                    className="bg-primary_color  text-white btn hover:bg-transparent hover:border-2 hover:border-primary_color hover:text-primary_color duration-300"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center flex flex-col items-center justify-center">
                <p className="text-base font-medium text-primary_color mt-8 text-center">
                  New here?{" "}
                  <Link
                    to="/signUp"
                    className="underline text-text_color_primary"
                  >
                    Create a New Account
                  </Link>
                </p>
                <p className="mt-6 text-xl font-inter font-medium">
                  Or Login up with
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
        </div>
      </Container>
    </section>
  );
};

export default Login;
