import login from "../../assets/login.png";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <section className="sm:w-2/3 sm:h-2/3 flex justify-evenly flex-col sm:flex-row items-center gap-10">
        <div className="h-full flex items-center">
          <img src={login} alt="Login" className="w-80 h-80 sm:w-96 sm:h-96" />
        </div>
        <div className="flex flex-col justify-center items-center text-center h-full w-96">
          <div className=" flex flex-col items-center mb-20 hidden sm:block">
            <h1 className="mb-2 text-6xl font-Poppins font-extrabold text-[#070F2B]">
              UpStart
            </h1>
            <p className="pl-2 text-xl font-Poppins font-bold text-[#0037c0]">
              For Seller
            </p>
          </div>
          <div className="w-full mb-5 ">
            <form
              className="flex flex-col gap-4 text-left"
              onSubmit={() => {
                navigate("/UpStart/get-started/create-store");
              }}
            >
              <input
                type="text"
                placeholder="Email Id"
                className="py-4 px-4 rounded-xl border-2 border-[#e0e0e0] w-full font-Quicksand font-semibold"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="py-4 px-4 rounded-xl border-2 border-[#e0e0e0]  w-full font-Quicksand font-semibold"
                required
              />
              <div className="text-center">
                <IconButton color="success" type="submit">
                  <Fingerprint fontSize="large" />
                </IconButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
