import { BrowserRouter, useRoutes } from 'react-router-dom'
// componentes
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Experience } from '../pages/Experience'
import { SingIn } from '../pages/SingIn'
import { ResizableDiv } from '../components/DivPrincipal'
// css
import './App.css'

function Routes(){
  let routes = useRoutes([
    { path:"/", element:<Home/>},
    { path:"/About", element:<About/>},
    { path:"/SingIn", element:<SingIn/>},
    { path:"/Experince", element:<Experience/>},
  ])
  return(routes)
}

function App() {
  return (
    <BrowserRouter>
      <ResizableDiv/>
    </BrowserRouter>
  )
}

export default App
export { Routes }

