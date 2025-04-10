import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Home");
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
