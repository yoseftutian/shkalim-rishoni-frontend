import { BrowserRouter, Route, Routes } from "react-router-dom";
import { links } from "../../data/links";
import { nanoid } from "nanoid";

export default function NetefRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {links.map((link) => (
          <Route key={nanoid()} path={link.href} element={link.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
