import { Outlet } from "react-router-dom"

function App() {

  return (
    <section className={container}>
      <Outlet />
    </section>
  )
}

export default App

const container = 'flex flex-col w-full h-full box-border'
