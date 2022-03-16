import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'


function App() {


  const baseurl = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState()
  const fetchApi = async () => {

    const response = await fetch(baseurl)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  }, [])





  return (
    <div className="App">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>completed</th>

          </tr>
        </thead>
        <tbody>
          <tr>

            {!todos ? 'Cargando...' :
              todos.map((todo, index) => {
                return <td> {todo.userId} {todo.id} {todo.title}{todo.completed}</td> 
                

            })
          }

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
