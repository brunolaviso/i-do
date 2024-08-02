import { useParams } from 'react-router-dom'

// const couple = {
//   id: 123,
//   slug: 'john-and-jane-doe',
//   choice: 1,
//   cover: 'https://via.placeholder.com/800x400',
//   title: 'John & Jane Doe',
//   date: '2022-12-31T00:00:00.000Z',
//   husband: {
//     name: 'John Doe',
//     age: 30,
//   },
//   wife: {
//     name: 'Jane Doe',
//     age: 25,
//   },
//   sections: [
//     {
//       id: 1,
//       title: 'Our Story',
//       content:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt.',
//     },
//     {
//       id: 2,
//       title: 'Our Wedding',
//       content:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt.',
//     },
//     {
//       id: 3,
//       title: 'Our Family',
//       content:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt.',
//     },
//     {
//       id: 4,
//       title: 'Gifts',
//       content:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt. Nullam ac ante vel ligula ultrices ultricies. Sed nec libero sed nunc lacinia tincidunt.',
//       gifts: [
//         {
//           id: 1,
//           name: 'Gift 1',
//           price: 100,
//         },
//         {
//           id: 2,
//           name: 'Gift 2',
//           price: 200,
//         },
//       ],
//     },
//     {
//       id: 5,
//       title: 'Location',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       image: 'https://via.placeholder.com/800x400',
//       map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.2379150476336!2d-48.56125132361563!3d-22.495255123295337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c74587f860ec65%3A0x4d9e7419ccc1db01!2sThoma&#39;s%20Drinks!5e0!3m2!1spt-BR!2sbr!4v1722556342385!5m2!1spt-BR!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//     },
//   ],
// }

export function TemplatePage() {
  const { slug } = useParams()

  // REQUEST COUPLE DATA BY SLUG

  return <h1>{slug}</h1>

  // if (couple.choice === 1) return <Template1 couple={couple} />
  // if (couple.choice === 2) return <Template2 couple={couple} />
  // if (couple.choice === 3) return <Template3 couple={couple} />
  // if (couple.choice === 4) return <Template4 couple={couple} />
  // if (couple.choice === 5) return <Template5 couple={couple} />
}
