import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="box-border flex h-full w-full flex-col">
      <Outlet />
    </section>
  );
}

export default App;
