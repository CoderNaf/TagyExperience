import { BrowserRouter, useRoutes } from 'react-router-dom'
// componentes
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Experience } from '../pages/Experience'
import { Plans } from '../pages/Plans'
import { SingIn } from '../pages/SingIn'
import { SingUp } from '../pages/SingUp'
import { ResizableDiv } from '../components/DivPrincipal'
// css
import './App.css'


const users = [
  {
    id:"@codernaf",
    Username : "Name",
    sessionActive: false,
    TipeAdmin:"Admin"

  }
]

function Routes(){
  let routes = useRoutes([
    { path:"/", element:<Home/>},
    { path:"/About", element:<About/>},
    { path:"/SingIn", element:<SingIn/>},
    { path:"/Experience", element:<Experience/>},
    { path:"/Plans", element:<Plans/>},
    { path:"/SingIn", element:<SingIn/>},
    { path:"/SingUp", element:<SingUp/>},
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

