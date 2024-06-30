import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useLoginMutation } from "../Redux/Slice/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../Redux/Slice/authSlice";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AloeRegisterMain from "../components/AloeRegisterMain/AloeRegisterMain";
import AloeRegister from "../components/AloeRegister/AloeRegister";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigation = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation("/Profile");
    }
  }, [navigation, userInfo]);

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation("/dashboard");
    } catch (error) {
      toast.error("Sehv email ya sifre");
    }
  };

  return (
    <div>
      <AloeRegister />
      <div className={styles.loginHead}>
        <section className={styles.container}>
          <div className={styles.loginHeadLogo}>
            <img
              src="https://my.aloe.az/assets/auth-image-ksAVJgD-.png"
              alt="Logo"
            />
          </div>
          <div className={styles.auth}>
            <h1>Kabinetə giriş!</h1>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {loginError && <div className={styles.error}>{loginError}</div>}
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Logging..." : "Login"}
              </button>
            </form>
            <p
              className={styles.loginmessage}
              onClick={() => navigation("/register")}
            >
              <p>Hesabınız yoxdur?

              <span> Qeydiyyat</span>
              </p>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
