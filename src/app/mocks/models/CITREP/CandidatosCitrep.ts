import Circunscripcion from "./Circunscripcion";

class CandidatosCitrep{
    public nombreCandidato:string;
    public votosCandidato:string;
    public agrupacionPolitica:string;
    public idCitrep:Circunscripcion;

    constructor(nom:string,vot:string,agr:string,idc:Circunscripcion){
        this.nombreCandidato=nom;
        this.votosCandidato=vot;
        this.agrupacionPolitica=agr;
        this.idCitrep=idc;
    }
}
export default CandidatosCitrep;