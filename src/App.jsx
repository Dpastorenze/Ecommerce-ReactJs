import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Boton from './components/Boton/Boton'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'


function App() {
  

  return (
    <ChakraProvider>
      
      <NavBar/>
      <ItemListConteiner title='NoLoNecesitoLoQuiero'/>
    </ChakraProvider>
  )
}

export default App
