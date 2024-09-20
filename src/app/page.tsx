import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">Julian Valbuena</h1>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#skills">Skills</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-gray-800 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
          <p className="mt-4 text-lg">I am a Site Reliability Engineer with over 18 years of experience.</p>
          <Link href="#projects">
            <button className="mt-6 px-4 py-2 bg-white text-black font-bold rounded">View My Work</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto p-8">
        <h3 className="text-3xl font-bold">About Me</h3>
        <p className="mt-4">
          I am an SRE with extensive experience in architectural design and implementation of PAAS and IAAS, performance management, and configuration automation. My objective is to lead the delivery of innovative technological solutions that perform reliably and cost-efficiently.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-900 p-8">
        <h3 className="text-3xl font-bold text-center">Experience</h3>
        <div className="container mx-auto mt-4">
          <h4 className="font-bold">Commonwealth Bank Australia</h4>
          <p>Principal Engineer SRE - Sales API & Decisioning Platform (July 2013 - Present)</p>
          <p>Leading the adoption of SRE practice for the platform and implementing the AWS Well Architected Framework.</p>
          <h4 className="font-bold mt-4">Ninefold.com</h4>
          <p>Senior Cloud Engineer (July 2012 - July 2013)</p>
          <p>Architected and deployed cloud systems, contributing to a multi-zone public cloud implementation.</p>
          <h4 className="font-bold mt-4">Nextgen.net</h4>
          <p>Operations Engineer (March 2008 - July 2012)</p>
          <p>Designed and implemented new customer environments and modified delivery pipelines.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto p-8">
        <h3 className="text-3xl font-bold">Skills & Expertise</h3>
        <ul className="mt-4 list-disc list-inside">
          <li>AWS Well Architected Framework</li>
          <li>ITIL Certified</li>
          <li>DevOps</li>
          <li>Cloud Computing (IAAS, PAAS)</li>
          <li>Ruby on Rails</li>
          <li>Configuration Automation</li>
          <li>Performance Management</li>
          <li>Systems Architectural Design</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 p-8">
        <h3 className="text-3xl font-bold text-center">Contact Me</h3>
        <form className="container mx-auto mt-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" required />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded" required></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-bold rounded">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Julian Valbuena. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page;