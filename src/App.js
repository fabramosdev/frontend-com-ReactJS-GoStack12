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

    async function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`)
        //setProjects([...projects, `Novo Projeto ${Date.now()}`])
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: 'Fabiano Ramos'
        })
        const project = response.data

        setProjects([...projects, project])
    }

    async function handleRemoveProject(data) {
        const projectId = data
        await api.delete(`projects/${projectId}`)
        api.get('projects').then(response => {
            setProjects(response.data)
        })
        
    }

    return (
        <>
            <div className="container">
            <Header title="Projects"/> 
            <ul className="list-group">
                {projects.map(project => (
                    <li className=" list-group-item list-group-item-primary" key={project.id}>
                        <span>{project.title}</span> 
                        <span><button className="btn btn-danger mx-5" type="button" onClick={handleRemoveProject.bind(this,project.id)}>Delete</button></span>
                    </li>
                ))}
            </ul> 
            <hr/>
            <button className="btn btn-outline-primary" type="button" onClick={handleAddProject}>Add Project</button> 
            </div>
            
                   
        </>
    )
}

export default App