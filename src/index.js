import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './component/ContactApp';
 
// styling
import './style/style.css';
 
const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);


// function Button({link}) {
//   // TODO: selesaikan component-nya
//   return <a href={link}>Find out more</a>;
// }
 
// function CardHeader({ image, category }) {
//   return (
//     <header>
//       <h4>{category}</h4>
//       <img src={image} alt="" />
//     </header>
//   );
// }
 
// function CardBody({ date, title, content, link }) {
//   return (
//     <div>
//       <p>{date}</p>
//       <h2>{title}</h2>
//       <p>{content}</p>
//       <Button link={link} />
//     </div>
//   );
// }
 
// function Card({ image, category, date, title, content, link }) {
//   return (
//     <article>
//       <CardHeader image={image} category={category} />
//       <CardBody date={date} title={title} content={content} link={link} />
//     </article>
//   );
// }
 
// function Header({ title, subtitle }) {
//   return (
//     <header>
//       <h1>{title}</h1>
//       <p>{subtitle}</p>
//     </header>
//   );
// }
 
// function News() {
//   // data news
//    // data news
//    const someNews = [
//     {
//       title: 'CNN Acuire BEME',
//       date: 'March 20 2022',
//       content: "CNN purchased Casey Neistat's Beme app for $25million.",
//       image: 'https://source.unsplash.com/user/erondu/600x400',
//       category: 'News',
//       link: '#'
//     },
//     {
//       title: 'React and the WP-API',
//       date: 'March 19 2022',
//       content: 'The first ever decoupled starter theme for React & the WP-API.',
//       image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
//       category: 'News',
//       link: '#'
//     },
//     {
//       title: 'Nomad Lifestyle',
//       date: 'March 19 2022',
//       content: 'Learn our tips and tricks on living a nomadic lifestyle.',
//       image: 'https://source.unsplash.com/user/erondu/600x400',
//       category: 'Travel',
//       link: '#'
//     }
//   ];
 
 
//   return (
//     <div>
//       <Header title="Latest News" subtitle="Covering March & April 2022" />
//       {someNews.map((news) => (
//         <Card {...news} />
//       ))}
//     </div>
//   );
// }
 
// const root = createRoot(document.getElementById('root'));
// root.render(<News />);


//jsx
// const element = (
//   <div>
//     <h1>Biodata Perusahaan</h1>
//     <ul>
//       <li>Nama: Dicoding Indonesia</li>
//       <li>Bidang: Education</li>
//       <li>Tagline: Decode Ideas, Discover Potential.</li>
//     </ul>
//   </div>
// );



// const root = createRoot(document.getElementById('root'));
// root.render(element);

// // const heading = React.createElement('h1', null, 'Biodata Perusahaan');


// // const root = createRoot(document.getElementById('root'));




// const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
// const listItem2 = React.createElement('li', null, 'Bidang: Education');
// const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.')

// const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);


// const container = React.createElement('div', null, [heading, unorderedList]);

// root.render(container);