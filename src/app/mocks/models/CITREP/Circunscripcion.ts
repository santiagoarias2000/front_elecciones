class Circunscripcion{
    public idCitrep: number
    public nombreCitrep:string;
    public totalVotos:string;

    constructor(idc:number,nom:string,tot:string){
        this.idCitrep=idc
        this.nombreCitrep=nom;
        this.totalVotos=tot;
    }
}
export default Circunscripcion;