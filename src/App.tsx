
import './App.css'
import etsy from '../public/data/etsy.json'
import Listing from './components/Listing';

function App() {
 const etsyData = JSON.parse(JSON.stringify(etsy));


  return <Listing data={etsyData}/>
}

export default App
