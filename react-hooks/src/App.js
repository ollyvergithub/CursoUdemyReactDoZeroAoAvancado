import React, {useState, useEffect, useMemo} from 'react';

function App() {

    const [tarefas, setTarefas] = useState([]);

    const [nomes, setNomes] = useState('Ollyver');

    const [input, setInput] = useState('');


    // Quando a state de tarefas sofrer alteração
    const totalTarefas =  useMemo(() => tarefas.length, [tarefas]);

    // Como se fosse o componentDidMount
    useEffect(() => {
        const getTarefasSetItem = localStorage.getItem('tarefasSetItem')

        if(getTarefasSetItem){
            setTarefas(JSON.parse(getTarefasSetItem))
        }

        // Como se fosse o componentWillUnmount - Quando desmonta o componente
        //return () => {}

    }, [])

    // Como se fosse o componentWillMount
    useEffect(()=> {
            localStorage.setItem("tarefasSetItem", JSON.stringify( tarefas))
        },[tarefas]
    );


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

            <h5>Você tem {totalTarefas} tarefas!</h5>

            <input type="text" value={input} onChange={(e) =>setInput(e.target.value) } />

            <button type="button" onClick={handleAdd}>Adicionar Tarefa</button>

        </div>
    );
}

export default App;
