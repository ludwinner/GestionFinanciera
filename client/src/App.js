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
            "sups": [],
            "key": "team_"+team
          }

          Sups(team,z).forEach(e=>newTeams.sups.push(e))
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
            "vend":[],
            "key": "Sup_"+sups
          }
          Vendedor(sups,z).forEach(e=>newSups.vend.push(e))

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
        ven.key= ven.CodVendedor
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
          'key': "Zone_"+zone
        }
        Team(zone).forEach(e=>newZones.team.push(e))      
        setSolicitud(oldSolicitud => [...oldSolicitud, newZones]);
      }
    })
  }
  return (
    <div className="App">
      <button onClick={Solicitud}>coso</button>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <td colSpan='10'></td>
              <td colSpan='12'>CLASIFICACIONES PENDIENTES</td>
              <td colSpan='4'>MESES ANTERIORES</td>
              <td colSpan='1'></td>
            </tr>
            <tr>
              <td colSpan='3'>Vendedor</td>
              <td colSpan='1'>Fecha Alta</td>
              <td colSpan='1'>Fecha Baja</td>
              <td colSpan='1'>Ingresadas</td>
              <td colSpan='1'>Ventas MP</td>
              <td colSpan='1'>Cruce Scoring</td>
              <td colSpan='1'>Objetivo</td>
              <td colSpan='1'>Producción</td>

              <td colSpan='1'>2</td>
              <td colSpan='1'>4</td> 
              <td colSpan='1'>5</td>
              <td colSpan='1'>6</td>
              <td colSpan='1'>7</td>
              <td colSpan='1'>SUBTOTAL</td>	
              <td colSpan='1'>3</td>
              <td colSpan='1'>8</td>
              <td colSpan='1'>9</td>
              <td colSpan='1'>SUBTOTAL</td>	
              <td colSpan='1'>Anulada 3 + 7</td>
              <td colSpan='1'>Anulada Rechazada</td>

              <td colSpan='1'>-1</td>
              <td colSpan='1'>-2</td>
              <td colSpan='1'>-3</td>
              <td colSpan='1'>PROM</td>	
              <td colSpan='1'>GB</td>
            </tr>
          </thead>
          {
            solicitud?.length>0 ?
            solicitud?.length>0 && solicitud?.map((zona)=>{
              return (
                <tbody>
                  <tr>
                    <td colSpan='10'>
                    <ul>
                      {
                        zona?.team.length>0 && zona?.team.map((team)=>{
                          return (
                            <li key={`${team.key}`}>{`${team.tipo}`}
                              <ul>
                                {
                                  team?.sups.length>0 && team?.sups.map((sups)=>{
                                    return (
                                      <li key={`${sups.key}`}>{`${sups.name}`}
                                          <ul>
                                          {
                                            sups?.vend.length>0 && sups?.vend.map((vend)=>{
                                              return (
                                                <li colSpan='3' key={`${vend.key}`}>{`${vend.NomVendedor}`}
                                                </li>
                                                )
                                            })
                                          }
                                          </ul>
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                            </li>
                          )
                        })
                      }
                    </ul>
                    </td>
                  </tr>
                </tbody>
              )
            }) 
            :
            <tbody>
              <tr>
                <td colSpan='27' rowSpan='10'>SIN DATOS</td>
              </tr>
            </tbody>
          }
        </table>
      </div>
    </div>
  );
}

export default App;