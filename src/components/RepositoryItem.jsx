export function RepositoryItem(props) {
  const {name, description, link} = props.repository
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a target="_blank" href={link}>Acessa repositório {name}</a>
    </li>
  )
}