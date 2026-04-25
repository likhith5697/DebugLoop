import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import BlogPost from './components/BlogPost';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'about' | 'post'
  const [selectedPost, setSelectedPost] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (target, post = null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPage(target);
      setSelectedPost(post);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  const renderPage = () => {
    if (page === 'post' && selectedPost) {
      return <BlogPost post={selectedPost} onBack={() => navigate('home')} />;
    }
    if (page === 'about') {
      return <About onBack={() => navigate('home')} />;
    }
    return (
      <Home
        onSelectPost={(post) => navigate('post', post)}
        onAbout={() => navigate('about')}
      />
    );
  };

  return (
    <Layout>
      <Header
        onLogoClick={() => navigate('home')}
        onAbout={() => navigate('about')}
        currentPage={page}
      />
      <div style={{
        flex: 1,
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
      }}>
        {renderPage()}
      </div>
      <Footer />
    </Layout>
  );
}

export default App;