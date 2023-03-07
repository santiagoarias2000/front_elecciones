import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VotesCongreso from "../../../models/VotesCongreso";
import ApiBack from "../../../utilities/domains/ApiBack";
import ServicePrivate from "../../../services/ServicePrivate";
import senado from "../../../../assets/image/camara.jpg";

type miObjeto = { nombreMuni: number };
export const  SenadoMuni = () => {
    let { idDepartment } = useParams();
    let { idMunicipality } = useParams();
    console.log(idDepartment, idMunicipality);
    
    const [seleccion, setSeleccion] = useState<number>()
    const [arrayVotesSenadoDepartamentalMunicipio, setArrayVotesSenadoDepartamentalMunicipio] =  useState<VotesCongreso[]>([]);
    
    
    
    const getVotosSenadoDepartamentalMunicipio = async () => {
        const urlCargarDepartamento =
          ApiBack.SENADO_NACIONAL_MUNICIPIO + "/" + idDepartment + "/municipio/" + idMunicipality;
        const result = await ServicePrivate.requestGET(urlCargarDepartamento);
        setArrayVotesSenadoDepartamentalMunicipio(result);
        if (result) {
          setArrayVotesSenadoDepartamentalMunicipio(result);
        }
      };
  
    useEffect(() => {
        getVotosSenadoDepartamentalMunicipio();
     
    }, [idDepartment,idMunicipality]);
    
    return (
      <main id="main" className="main">
        <img
          src={senado}
          style={{ width: "100%", maxHeight: "80%", marginTop: "10vw" }}
          alt="logo principal para la parte superior de la pagina web"
        />
        {/* Navegación estilo breadcrumb: Inicio */}
  
        {/* Navegación estilo breadcrumb: Fin */}
  
        {/* Ejemplo de una tabla para presentación de datos: Inicio */}
        <div className="col-lg-12" style={{ color: "#052851 !important" }}>
          <div className="cardBorder card">
            <div
              className="container-fluid display-flex justify-content-center"
              style={{
                background: "#052851",
                color: "#FFFFFF",
                height: "40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="text-center">
                <b>VOTOS POR DEPARTAMENTO</b>
              </div>
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Municipios
                </a>
                <ul className="dropdown-menu">
                  {/* {arrayMunicipios.map((myMunicipality)=>( 
                        <li><a className="dropdown-item"onClick={()=>{setSeleccion(myMunicipality.id_municipality)}} >{myMunicipality.name_municipality}</a></li>
                  ))} */}
                </ul>
              </div>
            </div>
  
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table
                className="colorTable table table-hover"
                style={{ background: "#05285190 !important" }}
              >
                <thead>
                  <tr>
                    <th className="text-center" style={{ width: "30%" }}>
                      CANDIATO
                    </th>
                    <th className="text-center" style={{ width: "30%" }}>
                      PARTIDO
                    </th>
                    <th className="text-center" style={{ width: "20%" }}>
                      MUNICIPIOS
                    </th>
                    <th className="text-center" style={{ width: "20%" }}>
                      TOTAL VOTOS
                    </th>
                  </tr>
                </thead>
                <tbody className="color">
                  {arrayVotesSenadoDepartamentalMunicipio.map((myVotes, contador) => (
                    <tr key={contador}>
                      <td className="text-center">
                        <b>{myVotes.candidate_name}</b>
                      </td>
                      <td className="text-center">{myVotes.description_politicparty}</td>
                      {/* <td className="text-center">{myVotes.municipality.name_municipality}</td> */}
                      
                      <td className="text-center">{myVotes.votos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
              
        <div className="position-absolute bottom-50 end-50"></div>
        {/* Ejemplo de una tabla para presentación de datos: Fin */}
      </main>
    );
}