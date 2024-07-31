import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, Tv, Music, Award } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import './index.css';
import GoldenParticles from './goldenparticles';

// Importing images directly
import suprithImage from './suprith.jpeg';
import milanImage from './milan.png';
import karanImage from './karan.jpg';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 z-50">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-6">
            {['home', 'features', 'about', 'services', 'overview', 'team', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className={`text-gold hover:text-white transition-colors duration-300 capitalize ${
                    activeSection === item ? 'border-b-2 border-gold' : ''
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <GoldenParticles />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            <h1 className="text-8xl font-bold mb-4 text-gold">PerformX</h1>
            <p className="text-3xl mb-8 ">Where Talent meets Opportunities</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-black px-8 py-4 rounded-full text-xl font-semibold hover:bg-white transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </section>

        <section id="features" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-bold mb-16 text-center text-gold">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { icon: Star, title: 'Real-time Leaderboard', description: 'Track your performance and climb the ranks.' },
                { icon: Users, title: 'Connect with Peers', description: 'Network with other talented performers.' },
                { icon: Tv, title: 'Reality Show Opportunities', description: 'Top performers get exclusive show invites.' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.7)" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center bg-gray-900 p-8 rounded-lg shadow-lg border border-gold"
                >
                  <feature.icon className="w-20 h-20 mx-auto mb-6 text-gold" />
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-bold mb-12 text-center text-gold">About PerformX</h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl text-center max-w-3xl mx-auto"
            >
              PerformX is a revolutionary online platform empowering performers to showcase their talents, connect with industry professionals, and access unparalleled opportunities. Our innovative platform bridges the gap between aspiring artists and the entertainment industry, providing a seamless and supportive ecosystem for success.
            </motion.p>
          </div>
        </section>

        <section id="services" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-bold mb-16 text-center text-gold">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                { icon: Music, title: 'Talent Showcase', description: 'Showcase your talents to a global audience, share your performances and get discovered by industry professionals and create a portfolio that highlights your skills and achievements' },
                { icon: Award, title: 'Performance Analytics', description: "Get insights into your performance metrics and audience engagement, Understand what works and what doesn't, and adjust your strategy accordingly and stay on top of your game with data-driven decisions" },
                { icon: Users, title: 'Career Opportunities', description: 'Access exclusive job listings and casting calls, connect with industry professionals and potential collaborators and stay updated on the latest industry trends and news' },
                { icon: Tv, title: 'Community Support', description: 'Connect with like-minded performers and industry professionals, share knowledge, resources, and experiences and get support and motivation to help you achieve your goals.' },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.7)" }}
                  transition={{ duration: 0.8 }}
                  className="flex items-start bg-gray-900 p-8 rounded-lg shadow-lg border border-gold"
                >
                  <service.icon className="w-16 h-16 mr-6 text-gold" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-lg">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16 text-center text-gold">Platform Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {['Discover Talent', 'Collaborate', 'Grow Your Career'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.7)" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-black p-8 rounded-lg shadow-lg text-center border border-gold"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gold">{item}</h3>
                  <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16 text-center text-gold">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'Suprith S', role: 'Chief Technology Officer', image: suprithImage },
                { name: 'Milanjyoti Ray', role: 'Founder & CEO', image: milanImage },
                { name: 'Karan Bharat', role: 'Co-Founder', image: karanImage },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center bg-gray-900 p-8 rounded-lg shadow-lg border-2 border-gold"
                >
                  <motion.div 
                    className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 text-gold">{member.name}</h3>
                  <p className="text-white text-lg">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold mb-16 text-center text-gold">Contact Us</h2>
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-lg mx-auto"
            >
              <div className="mb-6">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded bg-black border border-gold text-white text-lg" />
              </div>
              <div className="mb-6">
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded bg-black border border-gold text-white text-lg" />
              </div>
              <div className="mb-6">
                <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded bg-black border border-gold text-white text-lg"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gold text-black px-8 py-3 rounded-full text-xl font-semibold hover:bg-white transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gold">&copy; 2024 PerformX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;