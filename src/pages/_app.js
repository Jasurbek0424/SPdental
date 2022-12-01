import Nav from '../components/Nav/Nav.js'
import Service from '../components/Servise/Service.js'
import Footer from '../components/Footer/Footer';
import Location from '../components/Location/Location';
import '../styles/globals.css';


function MyApp() {
  return (
    <div>
      <div className='container'>
        <Nav />
        <Service />
        <Location />
      </div>
      <Footer />
    </div>
  )


}

export default MyApp
