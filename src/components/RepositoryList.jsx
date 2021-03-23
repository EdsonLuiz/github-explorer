import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'movieql',
  description: 'Movie API using GraphQL',
  link: 'https://github.com/EdsonLuiz/movieql'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>

    </section>
  )
}