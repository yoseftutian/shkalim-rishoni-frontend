import { Link } from "react-router-dom";
import { links } from "../../data/links";
import "./navbar.css";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
import { useState } from "react";
import RegistrationModal from "../registrationModal/registrationModal";
import { useLoginContext } from "../../contexts/LoginContext";
import LoginModal from "../loginModal/loginModal";

export default function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const { token, setToken } = useLoginContext();
  return (
    <nav className="container">
      <ul className="link-list">
        {links
          .filter((item) => !item.excluded)
          .map((item) => (
            <NavItem key={nanoid()} link={item} />
          ))}
      </ul>
      {token ? (
        <Button onClick={() => setToken(null)}>SignOut</Button>
      ) : (
        <div className="row">
          <Button onClick={() => setOpenRegister(true)} variant="outlined">
            Register
          </Button>
          <Button onClick={() => setOpenLogin(true)} variant="outlined">
            Login
          </Button>
        </div>
      )}
      {openLogin && <LoginModal setOpen={setOpenLogin} />}
      {openRegister && <RegistrationModal setOpen={setOpenRegister} />}
    </nav>
  );
}

function NavItem({ link }) {
  return (
    <li className="list-item">
      <Link
        className={`link ${
          window.location.pathname === link.href && "current"
        }`}
        to={link.href}
      >
        {link.title}
      </Link>
    </li>
  );
}
