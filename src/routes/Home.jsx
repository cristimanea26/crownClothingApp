import { Outlet } from "react-router-dom";
import Directory from "../components/Directory";

const Home = () => {
  return (
    <div className="home">
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
