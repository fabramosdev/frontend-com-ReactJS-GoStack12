import React, { useState } from 'react'
import Header from './components/Header'

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de App','Frontend Web'])



    function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`)
        setProjects([...projects, `Novo Projeto ${Date.now()}`])

        console.log(projects)
    }

    return (
        <>
            <Header title="Projects"/>   
            <ul>
                {projects.map(project => (
                    <li key={project}>{project}</li>
                ))}
            </ul> 
            <button type="button" onClick={handleAddProject}>Add Project</button>        
        </>
    )
}

export default App