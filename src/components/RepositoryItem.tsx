type RepositoryProps = {
  repository: {
    name: String, 
    description: String, 
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryProps) {
  const {name, description, html_url} = props.repository
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a target="_blank" href={html_url}>Acessa repositório {name}</a>
    </li>
  )
}