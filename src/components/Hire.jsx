import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function Hire() {
    return (
        <section className="mb-16 ">
            <h2 className="text-2xl font-medium mb-4">Hire Me</h2>
            <p className="text-gray-300">
                Looking to hire a software developer or need help solving your tech problems? Let's connect and
                build something impactful together.
            </p>
            <a className='mt-6' href="mailto:heyahmad611@gmail.com" rel="noreferrer">
                <FaEnvelope className="hover:text-gray-300" />
            </a>
        </section>
    );
}
