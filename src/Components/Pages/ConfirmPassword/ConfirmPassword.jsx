import { useEffect, useState } from "react";
import showPasswordIcon from "../../../assets/icons/show-password-icon-19.jpg";
import hidePasswordIcon from "../../../assets/icons/show-password-icon-18.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const ConfirmPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword0, setShowPassword0] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitState, setSubmitState] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
}, []);
const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPassword0 = () => {
    setShowPassword0(!showPassword0);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // handle submit ----------------------------------------------------------------
  const handleSubmit = (e) => {
    console.log("email---", email, 'password--- ', confirmPassword);
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("confirmPassword", confirmPassword);

    axios
      .post("https://consultantbackend.softplatoon.com/api/student-reg", data)
      .then((res) => {
        if(data){
          setSubmitState(res.data);
          navigate('/userLogin') ;
          Swal.fire({
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 2500
          });
        }
        else{
          Swal.fire({
            icon: "error",
            title: 'something went wrong',
            showConfirmButton: false,
            timer: 2500
          });   
        }
      }
    )
    .catch((error) => {
      console.error("Error submitting form:", error);
    });
    setLoading(false) ;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? <Loading/> : 
      <form>
        {/* Name section  */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            required
            // readOnly 
            className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            placeholder="Your Name"
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        {/* email section  */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            required
            // readOnly
            className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            placeholder="Your Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {/* password section  */}
        <div>
          <label htmlFor="password">Password:</label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span
              onClick={handleShowPassword}
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            >
              {showPassword ? (
                <img
                  className="w-[20px] h-[20px]"
                  src={showPasswordIcon}
                  alt=""
                />
              ) : (
                <img
                  className="w-[20px] h-[20px]"
                  src={hidePasswordIcon}
                  alt=""
                />
              )}
            </span>
          </div>
        </div>
        {/*confirm password section  */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
              id="confirmPassword"
              type={showPassword0 ? "text" : "password"}
              name="confirmPassword"
              placeholder="rewrite password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <span
              onClick={handleShowPassword0}
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            >
              {showPassword0 ? (
                <img
                  className="w-[20px] h-[20px]"
                  src={showPasswordIcon}
                  alt=""
                />
              ) : (
                <img
                  className="w-[20px] h-[20px]"
                  src={hidePasswordIcon}
                  alt=""
                />
              )}
            </span>
          </div>
        </div>

        {/* error message section */}
        {
          // passwordMatchErrorVisible &&
          password === confirmPassword && password !== "" ? (
            <p className="text-green-500">password matched </p>
          ) : (
            <p className="text-red-500">password do not matching </p>
          )
        }

        {/* submit button div  */}
        <div className="flex justify-center">
          <button
            className=" bg-[#25476a] hover:bg-gray-500 text-white text-md hover:text-black py-1 px-2 rounded focus:outline-none focus:shadow-outline  mt-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      }
    </div>
  );
};

export default ConfirmPassword;
