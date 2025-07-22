import React, { useState } from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './Blogspage.css';

// Sample blog data (you can replace this with actual data from an API or props)
const blogPosts = [
  {
    id: 1,
    image: '/imageswebsite/laptop.png', // Placeholder image
    date: '12th 04th 2025',
    title: 'The Pros & Cons Of Using Template',
  },
  {
    id: 2,
    image: '/imageswebsite/lady.png',
    date: '12th 04th 2025',
    title: 'The Pros & Cons Of Using Template',
  },
  {
    id: 3,
    image: '/imageswebsite/vitual.png',
    date: '12th 04th 2025',
    title: 'The Pros & Cons Of Using Template',
  },
  {
    id: 4,
    image: '/imageswebsite/Group.png',
    date: '12th 04th 2025',
    title: 'The Pros & Cons Of Using Template',
  },
  {
    id: 5,
    image: '/imageswebsite/ai.png',
    date: '12th 04th 2025',
    title: 'The Pros & Cons Of Using Template',
  },
  {
    id: 6,
    image: '/imageswebsite/chair.png',
    date: '12th 04th 2025',
    title: 'The Pros & Cons Of Using Template',
  },
];

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page

  // Calculate the posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="blogs-page">
      <Header />

      <div className="blogs-container">
        <h1 className="blogs-title">BLOGS</h1>
        <div className="blogs-grid">
          {currentPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <p className="blog-date">{post.date}</p>
                <h2 className="blog-title">{post.title}</h2>
                <button  className="read-more">
                  READ MORE  <img src="/imageswebsite/arrowrightlong.png" alt='imageooo' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? '' : ''}
            >
              {index + 2}
            </button>
          ))}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? '' : ''}
            >
              {index + 3}
            </button>
          ))}
        </div> 
        
      </div>

      <Footer />
    </div>
  );
};

export default BlogsPage;