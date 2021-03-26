import {useState, useEffect} from 'react'

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
  id: number
  name: String,
  description: String,
  html_url: string
}

const API_URL = 'https://api.github.com/users/edsonluiz/repos'


export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([])

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