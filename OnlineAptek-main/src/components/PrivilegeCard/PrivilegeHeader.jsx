import React, { useState } from "react";
import styles from "./PrivilegeHeader.module.scss";
import { CiUser } from "react-icons/ci";
import PrivilegeClub from "../PrivilegeClub/PrivilegeClub";
import SpecialMgr from "../SpecialMgr/SpecialMgr";
import AloePrivilege from "../Aloe+Privilege/AloePrivilege";
import { IoMdArrowDropdown } from "react-icons/io";
import AloeAbout from "../AloeAbout/AloeAbout";
import AloeCart from "../AloeCart/AloeCart";
import PrivilegeFootor from "../PrivilegeFootor/PrivilegeFootor";
import { useNavigate } from "react-router";

const PrivilegeHeader = () => {
  const navigate = useNavigate()
  const goAccount = () => {
    navigate("/account")
  }
  const [showDropdown, setShowDropdown] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied to clipboard");
      },
      (err) => {
        console.error("Copy error: ", err);
      }
    );
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className={styles.privilegeHeader}>
        <div className={styles.container}>
          <div className={styles.privilegeHeaderLogo}>
            <img
              src="https://privilege.aloe.az/assets/logo-1a9d25d2.svg"
              alt=""
            />
            <p>|</p>
            <h1>Privilege Club</h1>
          </div>
          <div className={styles.privilegeHeaderContact}>
            <p onClick={() => copyToClipboard("+1234567890")}>
            +994(99) 204-44-00
            </p>
            <button onClick={goAccount} style={{cursor:"pointer"}}>
              <CiUser size={20} />
              Daxil ol
            </button>
          </div>
        </div>
      </div>
      <PrivilegeClub />
      <SpecialMgr />
      <AloePrivilege />
      <AloeAbout />
      <AloeCart />
      <PrivilegeFootor />
    </div>
  );
};

export default PrivilegeHeader;
