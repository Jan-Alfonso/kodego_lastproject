import { Outlet } from "react-router-dom";
import NavAppBar from "./AppBar";

export default function NavbarLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
