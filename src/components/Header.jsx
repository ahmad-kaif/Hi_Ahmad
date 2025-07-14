import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHome, FaPodcast, FaWalking } from 'react-icons/fa';
import { FaWalkieTalkie } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
      <div className="text-xl font-bold flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
          <FaHome />
          Home
        </Link>

        <FaWalking className="ml-3" />

        <Link
          to="/side-projects"
          className="text-sm text-blue-400 hover:underline ml-2"
        >
          Journey
        </Link>
      </div>

      <div className="flex gap-4 text-lg">
        <a href="https://github.com/ahmad-kaif" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-gray-300" />
        </a>
        <a href="https://www.linkedin.com/in/ahmadkaif/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-gray-300" />
        </a>
        <a href="https://x.com/ahmadkaifansari" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-gray-300" />
        </a>
        <a href="mailto:heyahmad611@gmail.com.com" rel="noreferrer">
          <FaEnvelope className="hover:text-gray-300" />
        </a>
      </div>
    </header>
  );
}
