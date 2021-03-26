export function RepositoryItem(props) {
  const {name, description, link: html_url} = props.repository
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a target="_blank" href={html_url}>Acessa repositório {name}</a>
    </li>
  )
}