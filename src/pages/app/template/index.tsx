import { useParams } from 'react-router-dom'

// const couple = {
//   id: 123,
//   slug: 'john-and-jane-doe',
//   choice: 1,
//   husband: {
//     name: 'John Doe',
//     age: 30,
//   },
//   wife: {
//     name: 'Jane Doe',
//     age: 25,
//   },
// }

export function TemplatePage() {
  const { slug } = useParams()

  return <h1>{slug}</h1>
}
