import React from "react";


const ProjectTwo = ({ ativo, setAtivo }) => {

  return (
    <>
      {ativo ? (

        <div className="modal-overlay">
          <div className="modal-content">
            <div className="close-button" onClick={() => setAtivo(false)}>X</div>
            <h1>Projeto 2</h1>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default ProjectTwo;