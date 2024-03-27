import { Link } from "react-router-dom";
import { links } from "../../data/links";
import "./navbar.css";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
import { useState } from "react";
import RegistrationModal from "../registrationModal/registrationModal";
import { useLoginContext } from "../../contexts/LoginContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { token } = useLoginContext();
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
        <Button>SignOut</Button>
      ) : (
        <div className="row">
          <Button variant="outlined">Register</Button>
          <Button onClick={() => setOpen(true)} variant="outlined">
            Login
          </Button>
        </div>
      )}
      {open && <RegistrationModal setOpen={setOpen} />}
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
