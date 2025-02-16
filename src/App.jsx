import { Outlet, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div
      className={`min-h-screen ${
        pathname.includes("/dashboard") ? "w-full" : "max-w-2xl p-6"
      } mx-auto`}
    >
      <Outlet />
    </div>
  );
}

export default App;
