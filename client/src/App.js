import React, {useState} from 'react';
import './App.css';
// import DetalleIngresadas from './api/DetalleIngresadas.js'
import PreSolicitud from './api/PreSolicitud.js'
// import Card from './components/Card.jsx';
// import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';

function App() {
  const [solicitud, setSolicitud] = useState([])
  const info =  PreSolicitud
  
  const Team = (z) =>{
    const preTeam = []
    let preteam = info.map(ps => {
      if (ps.NombreZona === z){ 
        return ps.EsMiniEmprendedor
      }
    }).filter(fil => fil !== undefined)
    preteam = preteam.filter((team,index)=>{
      if (preteam.indexOf(team) === index){
          const newTeams = {
            "tipo": team,
            "sups": [] 
          }

          newTeams.sups.push(Sups(team,z))
          preTeam.push(newTeams)
          return newTeams
      }
    })
    return preTeam
  }
  const Sups = (t,z) =>{
    const preSups = []
    let presups =  info.map(psu => {
      if (psu.EsMiniEmprendedor === t){ 
        return psu.NomSucursal
      }
    })
    presups = presups.filter((sups,index)=>{
      if (presups.indexOf(sups) === index){
        if (sups!== undefined) {
          const newSups = {
            "name":sups,
            "vend":[]
          }
          newSups.vend.push(Vendedor(sups,z))
          preSups.push(newSups)
        }
      }
    })
    return preSups
  }
  const Vendedor = (su,z) =>{
    let preVen = info.map(ven => {
      if (ven.NomSucursal === su && ven.NombreZona === z) {
        delete ven.NomSucursal
        delete ven.NombreZona
        delete ven.EsMiniEmprendedor
        return ven
      }
    })
    preVen = preVen.filter(pv => pv !== undefined)
    return preVen
  }
  
  const Solicitud = () =>{
    let prezona = info.map(ps => ps.NombreZona)
    prezona = prezona.filter((zone,index)=>{
      if (prezona.indexOf(zone) ===index){
        const newZones = {
          "name":zone,
          "team":[],
          'key': zone
        }
        newZones.team.push(Team(zone))
        setSolicitud(oldSolicitud => [...oldSolicitud, newZones]);
      }
    })
  }
  return (
    <div className="App">
      <button onClick={Solicitud}>coso</button>
      <hr />
      <div>
        <table class="default">
          <tr>
            <td colspan='10'></td>
            <td colspan='12'>CLASIFICACIONES PENDIENTES</td>
            <td colspan='4'>MESES ANTERIORES</td>
            <td colspan='1'></td>
          </tr>
          <tr>
            <td colspan='3'>Vendedor</td>
            <td colspan='1'>Fecha Alta</td>
            <td colspan='1'>Fecha Baja</td>
            <td colspan='1'>Ingresadas</td>
            <td colspan='1'>Ventas MP</td>
            <td colspan='1'>Cruce Scoring</td>
            <td colspan='1'>Objetivo</td>
            <td colspan='1'>Producción</td>

            <td colspan='1'>2</td>
            <td colspan='1'>4</td> 
            <td colspan='1'>5</td>
            <td colspan='1'>6</td>
            <td colspan='1'>7</td>
            <td colspan='1'>SUBTOTAL</td>	
            <td colspan='1'>3</td>
            <td colspan='1'>8</td>
            <td colspan='1'>9</td>
            <td colspan='1'>SUBTOTAL</td>	
            <td colspan='1'>Anulada 3 + 7</td>
            <td colspan='1'>Anulada Rechazada</td>

            <td colspan='1'>-1</td>
            <td colspan='1'>-2</td>
            <td colspan='1'>-3</td>
            <td colspan='1'>PROM</td>	
            <td colspan='1'>GB</td>
          </tr>
          {
            solicitud?.length>0 ?
            solicitud?.length>0 && solicitud?.map((e)=>{
              return (
                <tr>
              <td colspan='27'>{`${e.name}`}</td>
        </tr>
              )
            }) 
            :
            <tr>
            <td colspan='27' rowspan='10'>SIN DATOS</td>
        </tr>
          }
        </table>
      </div>
    </div>
  );
}

export default App;