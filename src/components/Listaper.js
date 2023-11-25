
import React from "react";


//Este es el codigo de las tarjetas mostrando los datos de los personajes en la pantalla de inicio o el App.js




const Listaper = ({ characters, openModal }) => {
  return (
    <div style={{ background: '#f2f2f2', minHeight: '100vh' }} className="container">
      <br />

      
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.image} alt="character" />
              <div className="card-body">
                {}
                <h5
                  className="card-title"
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(item)}
                >
                  {item.name}
                </h5>
                <hr />
                <p className="card-text">Especie: {item.species}</p>
                <p className="card-text">Genero: {item.gender}</p>
                <p className="card-text">Locacion: {item.location.name}</p>
                <p className="card-text">Especie: {item.status}</p>
                <p className="card-text">Fecha: {new Date(item.created).toLocaleDateString('es-ES')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listaper;
