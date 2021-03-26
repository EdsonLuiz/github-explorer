import {useState, useEffect} from 'react'

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository = {
  name: 'movieql',
  description: 'Movie API using GraphQL',
  link: 'https://github.com/EdsonLuiz/movieql'
}

const API_URL = 'https://api.github.com/users/edsonluiz/repos'

export function RepositoryList() {

  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>

    </section>
  )
}