import React from 'react';
import './Blog.css';

const blogPosts  = [
  {
    title: ' Bringing Light to Lives:A Ray of Hope Through Solar Power',
    image: '/images/solar.jpeg',
    date: 'June 6, 2025',
    content:
      'We hope that the person who has suffered for a long time without electricity feels better from now on .',
  },
   {
     title: 'Murugan Manadu',
     image: '/images/murugan.jpeg',
     date: 'June 23, 2025',
      content:
       'The temple town of Madurai is bracing for a spiritual spectacle of historic proportions as it prepares to welcome lakhs of devotees for the grand Murugan Bhakthargal.',
   },
   {
     title: 'International Yoga Day',
     image: '/images/Yoga1.jpeg',
    date: 'June 21, 2025',
    content:
    '  Yoga is a timeless gift from India’s ancient heritage to the world. It nurtures both the body and the mind, offering a path to physical vitality and inner peace. Every year on June 21, the world comes together to celebrate International Yoga Day',
   },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Nation's First Trust Impact Stories</h1>
      <p className="blog-subtitle">Read about our latest activities and efforts to build a better Nation.</p>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
      <img src={post.image} alt={post.title} className="blog-image zoom-effect" />

            <div className="blog-content">
              <h2>{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
