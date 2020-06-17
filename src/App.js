import React, { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header'
import api from './services/api'

function App() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])

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
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul> 
            <button type="button" onClick={handleAddProject}>Add Project</button>        
        </>
    )
}

export default App