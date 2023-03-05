import Department from "./Department";
import Municipality from "./Municipality";

class VotesCongreso {
  public id_votes: number;
  public election_year: string;
  public candidate_description: string;
  public gender: string;
  public description_option: string;
  public department: Department;
  public municipality: Municipality;
  public description_position: string;
  public table_number: number;
  public code_role: number;
  public description_role: string;
  public description_district: string;
  public code_politicparty: number;
  public description_politicparty: string;
  public code_candidate: number;
  public candidate_name: string;
  public votos: number;
  public votos_muicipio:number;
  public code_contry: string;

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
    numberVotesMunicipio:number,
    codeCont: string
  ) {
    this.id_votes = id;
    this.election_year = elecYea;
    this.candidate_description = candiDes;
    this.gender = gender;
    this.description_option = descrOption;
    this.department = idDepa;
    this.municipality = idMun;
    this.description_politicparty = descPolipa;
    this.table_number = tableNu;
    this.code_role = codeRol;
    this.description_role = descRol;
    this.description_district = descDistr;
    this.description_position = descrPosit;
    this.code_politicparty = codePolipar;
    this.code_candidate = codeCan
    this.candidate_name = nameCandi;
    this.votos = numberVotes;
    this.votos_muicipio=numberVotesMunicipio;
    this.code_contry = codeCont;


  }
}

export default VotesCongreso;