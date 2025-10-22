import { BrowserRouter, Routes, Route } from "react-router-dom";

/* NAVBAR */
import { NavBar } from "../components/Navbar/Navbar";
import { NavItem } from "../components/Navbar/NavItem";

/* PAGES */
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Temario } from "../pages/Temario";
import { TaskManager } from '../pages/TaskManager'
import { NotFound } from "../pages/NotFound";

/* GENERAL */
import { infoTemario } from "../data/infoTemario";
import { GeneralTopic } from "../pages/GeneralTopic";

const Layout: React.FC = () => {
  return (
    <section>
      <NavBar>
        <NavItem to="/" text="Inicio" />
        <NavItem to="/about" text="Sobre nosotros" />
        <NavItem to="/temario/" text="Temario" />
        <NavItem to="/taskManager" text="Task Manager" />
      </NavBar>

      {/* RUTAS */}
      <Routes>
        {/* GENERALES */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* TEMARIO */}
        <Route path="/temario/" element={<Temario />}>
          {infoTemario.map((topic, index) => (
            <Route key={index} path={topic.link} element={<GeneralTopic topic={topic}/>} />
          ))}
        </Route>

        {/* TASK MANAGER */}
        <Route path="/taskManager" element={<TaskManager />} />

        {/* NOT FOUND */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

const MyRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default MyRoutes;
