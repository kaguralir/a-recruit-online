import React, {useState,useEffect} from "react"

export default function gestionComptable(){
    const [name, setName] = useState();
    const [n, setN] = useState();
    const [n_minus, setNMinus] = useState();
    const [diff, setDiff] = useState();
    const [compta,setCompta]=useState([])

    useEffect(()=>{
        setCompta([{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"},{name:"L1-C1",n:"L1-C2",n_minus:"L1-C3",diff:"l1-C4"}])
    },[])

    const addRow=() => {
        setCompta([...compta,{name:name,n:n,n_minus:n_minus,diff:diff}])
        console.log(compta);
    }
    return (
        <div>   
            <div>
                <div>
                    <p>Ajouter une entrée</p>
                    <input placeholder='Exercice' onChange={(e) => setName(e.target.value)}/>
                    <input placeholder='N' onChange={(e) =>setN(e.target.value)}/>
                    <input pleceholder='N-1' onChange={(e) => setNMinus(e.target.value)}/>
                    <input placeholder='diff' onChange={(e) => setDiff(e.target.value)}/>
                    <input type="submit" onClick={(e) =>{e.preventDefault(); addRow()}} value="ajouter"/>
                    </div>
                <div>
                <p>Ajouter une sortie</p>
                <input/>
                <input/>
                <button>Ajouter</button>
                </div>
                <div>
                <button>Imprimer</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Exercice</th>
                        <th>N</th>
                        <th>N-1</th>
                        <th>Progression</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        compta.map((data,index)=>{
                    
                            return (
                                <tr key={index}>
                                    <td >{data.name}</td>
                                    <td >{data.n}</td>
                                    <td >{data.n_minus}</td>
                                    <td >{data.diff}</td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>
        </div>
    );
}