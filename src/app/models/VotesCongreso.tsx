import Department from "./Department";
import Municipality from "./Municipality";

class VotesCongreso {
  public idVotes: number;
  public electionYear: string;
  public candidateDescription: string;
  public gender: string;
  public descriptionOption: string;
  public idDepartment: Department;
  public idMunicipality: Municipality;
  public descriptionPosition: string;
  public tableNumber: number;
  public codeRole: number;
  public descriptionDistrict: string;
  public codePoliticparty: number;
  public descriptionPoliticparty: string;
  public codeCandidate: number;
  public candidate_name: string;
  public numberVotes: number;
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
    descDistr: string,
    codePolipar: number,
    descPolipa: string,
    nameCandi: string,
    numberVotes: number,
    codeCont: string
  ) {
    this.idVotes = id;
    this.electionYear = elecYea;
    this.candidateDescription = candiDes;
    this.gender = gender;
    this.descriptionOption = descrOption;
    this.idDepartment = idDepa;
    this.idMunicipality = idMun;
    this.descriptionPoliticparty = descPolipa;
    this.tableNumber = tableNu;
    this.codeRole = codeRol;
    this.descriptionDistrict = descDistr;
    this.descriptionPosition = descrPosit;
    this.codePoliticparty = codePolipar;


  }
}
