const ApiBack = {
  //URL: "http://localhost:3123",
  URL: "https://guiaelectoraldecolombia.onrender.com",

  LOGIN: "/api/public/user/login",



  COMBOBOX_MUNICIPIO: "/api/public/municipio",
  NOMBRE_MUNICIPIO: "/api/public/municipio/one",
  NOMBRE_LOCALIDAD: "/api/public/municipio/localidad/one",
  NOMBRE_DEPARTAMENTO_TERRITORIAL: "/api/public/departamento/territorial",
  NOMBRE_DEPARTAMENTO_INDIGENA: "/api/public/departamento/indigenaCamara",
  NOMBRE_DEPARTAMENTO_AFRODESCENDIENTE: "/api/public/departamento/afrodescendiente",
  
  NOMBRE_DEPARTAMENTO_GOBERNACION: "/api/public/departamento/gobernacion",
  NOMBRE_DEPARTAMENTO_ASAMBLEA: "/api/public/departamento/asamblea",
  NOMBRE_DEPARTAMENTO_ALCADIA: "/api/public/departamento/alcaldia",
  NOMBRE_DEPARTAMENTO_JAL: "/api/public/departamento/jal",
  NOMBRE_DEPARTAMENTO_CONCEJO: "/api/public/departamento/concejo",



  NOMBRE_DEPARTAMENTO_NACIONAL: "/api/public/departamento/nacional",
  NOMBRE_DEPARTAMENTO_INDIGENA_SENADO: "/api/public/departamento/indigenaSenado",

  CAMARA_TERRITORIAL: "/api/public/camara/territorial",
  CANTIDAD_CAMARA_TERRITORIAL: "/api/public/camara/cantidadTerritorial",
  CAMARA_INDIGENA: "/api/public/camara/indigena",
  CAMARA_AFRODESCENDIENTE: "/api/public/camara/afrodescendiente",

  SENADO_LIST_102: "/api/public/senado/circuncripcion/nacional/elegidos",
  SENADO_LIST_2_INDIGENA: "/api/public/senado/circuncripcion/indigena/elegidos",
  SENADO_NACIONAL:"/api/public/senado/circuncripcion/nacional/senado",
  SENADO_NACIONAL_DEPARTAMENTO:"/api/public/senado/circuncripcion/nacional/senado/departamental",
  SENADO_NACIONAL_MUNICIPIO:"/api/public/senado/circuncripcion/nacional/senado/departamental",

  SENADO_INDIGENA:"/api/public/senado/circuncripcion/indigena/senado",
  SENADO_INDIGENA_DEPARTAMENTAL:"/api/public/senado/circuncripcion/indigena/senado/departamental",
  SENADO_INDIGENA_MUNICIPIO:"/api/public/senado/circuncripcion/indigena/senado/departamental",

  CAMARA_TERRITORIAL_DEPARTAMENTO:"/api/public/camara/circuncripcion/territorial/departamento",
  CAMARA_INDIGENA_DEPARTAMENTO:"/api/public/camara/circuncripcion/indigena/departamento",
  CAMARA_AFRODESCENDIENTE_DEPARTAMENTO:"/api/public/camara/circuncripcion/afrodescendiente/departamento",
  
  CAMARA_TERRITORIAL_DEPARTAMENTO_MUNICIPIO:"/api/public/camara/circuncripcion/territorial/departamento",
  CAMARA_INDIGENA_DEPARTAMENTO_MUNICIPIO:"/api/public/camara/circuncripcion/indigena/departamento",
  CAMARA_AFRODESCENDIENTE_DEPARTAMENTO_MUNICIPIO:"/api/public/camara/circuncripcion/afrodescendiente/departamento",

  GOBERNACION:"/api/private/gobernacion",
  GOBERNACION_DEPARTAMENTO:"/api/private/gobernacion/departamento",
  GOBERNACION_DEPARTAMENTO_MUNICIPIO:"/api/private/gobernacion/departamento",

  
  ASAMBLEA:"/api/private/asamblea",
  ASAMBLEA_DEPARTAMENTO:"/api/private/asamblea/departamento",
  ASAMBLEA_DEPARTAMENTO_MUNICIPIO:"/api/private/asamblea/departamento",

  ALCALDIA:"/api/private/alcaldia",
  ALCALDIA_DEPARTAMENTO:"/api/private/alcaldia/departamento",
  ALCALDIA_DEPARTAMENTO_MUNICIPIO:"/api/private/alcaldia/municipio",

  CONCEJO:"/api/private/concejo",
  CONCEJO_DEPARTAMENTO:"/api/private/concejo/departamento",
  CONCEJO_DEPARTAMENTO_MUNICIPIO:"/api/private/concejo/municipio",
  
  JAL:"/api/private/jal",
  JAL_DEPARTAMENTO:"/api/private/jal/departamento",
  JAL_DEPARTAMENTO_MUNICIPIO:"/api/private/jal/municipio",          
  JAL_DEPARTAMENTO_BOGOTA:"/api/private/jal/departamento/bogota",
  JAL_LOCALIDAD:"/api/private/jal/localidad",          
  
};
export default ApiBack;