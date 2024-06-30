import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useRegisterMutation } from "../../Redux/Slice/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../Redux/Slice/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AloeRegisterMain from '../../components/AloeRegister/AloeRegister'
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/"); 
    }
  }, [navigate, userInfo]);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Şifreler eşleşmiyor");
      return;
    }
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/"); 
    } catch (error) {
      toast.error("Kayıt başarısız");
    }
  };

  return (
    <div>
      <AloeRegisterMain/>
      <div className={styles.registerHead}>
        <div className={styles.container}>
          <div className={styles.registerLogo}>
              <img src="https://my.aloe.az/assets/auth-image-ksAVJgD-.png" alt="Logo" />
          </div>
          <div className={styles.auth}>
            <h1>Xoş gəldiniz!</h1>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Kullanıcı oluşturuluyor" : "Kayıt ol"}
              </button>
            </form>
            <p
              className={styles.loginmessage}
              onClick={() => navigate("/account")}
            >
              <span>Giriş Yap</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
