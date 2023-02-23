export const Welcome = () => {
  return (
    <div className="containner-welcome">
      <section className="img">
        <img src="" alt="Imagen de Elecciones 2022" />
      </section>

      <section className="cards">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Presidenciales</h5>
                  <a href="#" className="btn btn-primary">
                    Ver resultados
                  </a>
                </div>
              </div>
            </div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
      </section>
    </div>
  );
};
