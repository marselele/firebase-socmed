import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <Link to="/"> HOME</Link>
      <Link to="/login"> LOGIN</Link>
      <div>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} />
        <button onClick={signUserOut}>LOG OUT</button>
      </div>
    </div>
  );
};

export default Navbar;
