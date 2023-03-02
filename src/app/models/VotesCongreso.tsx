import Department from "./Department";
import Municipality from "./Municipality";

class VotesCongreso {
  public idVotes: number;
  public electionYear: string;
  public candidateDescription: string;
  public gender: string;
  public descriptionOption: string;
  public department: Department;
  public idMunicipality: Municipality;
  public descriptionPosition: string;
  public tableNumber: number;
  public codeRole: number;
  public description_role: string;
  public descriptionDistrict: string;
  public codePoliticparty: number;
  public description_politicparty: string;
  public codeCandidate: number;
  public candidate_name: string;
  public votos: number;
  public codeContry: string;

  constructor(
    id: number,
    elecYea: string,
    candiDes: string,
    gender: string,
    descrOption: string,
    idDepa: Department,
    idMun: Municipality,
    descrPosit: string,
    tableNu: number,
    codeRol: number,
    descRol: string,
    descDistr: string,
    codePolipar: number,
    descPolipa: string,
    codeCan:number,
    nameCandi: string,
    numberVotes: number,
    codeCont: string
  ) {
    this.idVotes = id;
    this.electionYear = elecYea;
    this.candidateDescription = candiDes;
    this.gender = gender;
    this.descriptionOption = descrOption;
    this.department = idDepa;
    this.idMunicipality = idMun;
    this.description_politicparty = descPolipa;
    this.tableNumber = tableNu;
    this.codeRole = codeRol;
    this.description_role = descRol;
    this.descriptionDistrict = descDistr;
    this.descriptionPosition = descrPosit;
    this.codePoliticparty = codePolipar;
    this.codeCandidate = codeCan
    this.candidate_name = nameCandi;
    this.votos = numberVotes;
    this.codeContry = codeCont;


  }
}

export default VotesCongreso;