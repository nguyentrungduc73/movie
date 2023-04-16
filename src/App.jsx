

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { publicRoutes } from './Routes'
import Layout from './Layout/Layout'
function App() {


  return (
    <BrowserRouter>
      <div className="App" >
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout >
              <Page />
            </Layout>} ></Route>
          })}

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
