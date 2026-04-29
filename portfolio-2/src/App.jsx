import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  const [theme, setTheme] = useState("dark");
  const handleThemeChange = () => setTheme(t => t === "dark" ? "light" : "dark");

  return (
    <BrowserRouter>
<div
  style={{ position: 'relative', zIndex: 1 }}
  className={`min-h-screen flex items-center justify-center py-16 duration-200 ${theme === "dark" ? "text-white" : "bg-gray-100 text-black"}`}
>
<div className={`w-full max-w-2xl mx-4 sm:mx-auto rounded-xl border border-gray-700 border-opacity-50 p-8 ${theme === "dark" ? "bg-[rgb(18,18,18)]" : "bg-white"}`}>
          {/* Card header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-bold text-md">Matthew Phang</h1>
            <div className="flex items-center gap-6">
<nav className="flex gap-4 text-sm">
<NavLink
  to="/"
  end
  className={({ isActive }) =>
    `relative pb-1 nav-link ${
      isActive ? "text-white active" : "opacity-70 hover:opacity-100"
    }`
  }
>
  About
</NavLink>

  <NavLink
    to="/projects"
    className={({ isActive }) =>
      `relative pb-1 ${
        isActive ? "text-white active" : "opacity-70 hover:opacity-100"
      } nav-link`
    }
  >
    Projects
  </NavLink>
</nav>

            </div>
          </div>

          {/* Page content */}
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;