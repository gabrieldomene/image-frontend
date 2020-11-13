import React from 'react';

import './style.css';

function SideBar(props) {

  function dbCreate() {
    // Clicar no create, adicionar um link DATABASE N#
    // Criar db com esse mesmo nome
    var list_div = document.getElementById('db-list');
    var child_count = list_div.childElementCount
    var new_option = document.createElement("p");
    new_option.id = "db-" + child_count;
    new_option.innerHTML = "Database " + child_count;
    new_option.addEventListener("click", (e) => props.changeCurrentDB(e.target.id));
    list_div.appendChild(new_option);
    localStorage.setItem("db-1", new_option.id);
  }

  return (
    <div className="container-data">
      <div className="list-databases" id='db-list'>
        {/* aqui devo receber a funcao e chamar */}
        <p id="db-0" onClick={(e) => props.changeCurrentDB(e.target.id)}>Database 0</p>
      </div>
      <div className="action-database">
        <div className="btn-create"  onClick={dbCreate}>
          <p>Create DB</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar;