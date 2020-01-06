import React, {useState, useEffect} from 'react';

function App() {

    const [tarefas, setTarefas] = useState([

    ]);

    const [nomes, setNomes] = useState('Ollyver');

    const [input, setInput] = useState('');


    const handleAdd = () =>{
        //setTarefas([...tarefas,'Adicionando mais uma tarefa'])
        setTarefas([...tarefas, input])
        setInput('')
    };

  return (
    <div className="App">
        <h1>React Hooks</h1>
        <h4>{nomes}</h4>

        <ul>
            {tarefas.map((item, index) =>(
                <li key={item+index}>{item}</li>
            ))}
        </ul>

        <input type="text" value={input} onChange={(e) =>setInput(e.target.value) } />

        <button type="button" onClick={handleAdd}>Adicionar Tarefa</button>

    </div>
  );
}

export default App;
