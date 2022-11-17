import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import DetalleIngresadas from './api/DetalleIngresadas.js'
import PreSolicitud from './api/PreSolicitud.js'
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  const [solicitud, setSolicitud] = useState([])
  const [zonas, setZonas] = useState([])
  const [equipo, setEquipo] = useState([])
  const [supervisor, setSupervisor] = useState([])
  const [vendedor, setVendedor] = useState([])

  const Coso = (z) =>{
    // let detalleIngresadas = DetalleIngresadas
    let prezona = PreSolicitud.map(ps => ps.NombreZona)
    prezona = prezona.filter((item,index)=>{
      return prezona.indexOf(item) === index;
    })
    let preteam =  PreSolicitud.map(ps => ps.EsMiniEmprendedor)
    preteam = preteam.filter((item,index)=>{
      return preteam.indexOf(item) === index;
    })
    let presups =  PreSolicitud.map(ps => ps.NomSucursal)
    presups = presups.filter((item,index)=>{
      return presups.indexOf(item) === index;
    })
    let preven =  PreSolicitud
    preven = preven.map(ps => {
      delete ps.NomSucursal
      // console.log(ps,"ps");
      delete ps.NombreZona
      delete ps.EsMiniEmprendedor
      return ps
    })
    
    const newZones = {
      "name":prezona,
      "team":equipo 
    }
    const newTeams = {
      "tipo": preteam,
      "team":supervisor 
    }
    const newSups = {
      "name":presups,
      "team":vendedor 
    }
    const newVend = preven

    setSolicitud(newZones)
    // setZonas(newTeams)
    // setEquipo(newSups)
    // setSupervisor(newVend)
    console.log(solicitud, 'PreSolicitud');
  }
  return (
    <div className="App">
        <button onClick={Coso}>coso</button>
      <hr />
      {/* <div>
        <Cards
          zones={solicitud}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(z) => Coso(z)}
        />
      </div> */}
    </div>
  );
}

export default App;
