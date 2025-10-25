'use client'
import {FaTools,FaUsers,FaPalette } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
         I’m a passionate UI/UX Designer who loves creating clean, user-friendly, and visually appealing designs.
         I focus on understanding user needs and turning ideas into smooth and enjoyable digital experiences.
        </p>
      </motion.section>

      {/* Skills Section */}
<motion.section 
  className="mb-16"
  {...fadeIn}
  transition={{ delay: 0.2 }}
>
  <motion.h2 
    className="section-title"
    {...fadeInUp}
  >
    Skills
  </motion.h2>
  
  <motion.div 
    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    variants={staggerContainer}
    initial="initial"
    animate="animate"
  >
    {/* UI Design */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
      {...cardHover}
    >
      <FaPalette className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">UI Design</h3>
      <ul className="text-secondary space-y-2">
        <li>Figma (Prototyping, Components, Auto Layout)</li>
        <li>Wireframing & High-Fidelity Mockups</li>
        <li>Visual & Interaction Design</li>
        <li>Responsive & Mobile-First Design</li>
      </ul>
    </motion.div>

    {/* UX Design */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
      {...cardHover}
    >
      <FaUsers className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">UX Design</h3>
      <ul className="text-secondary space-y-2">
        <li>User Research & Personas</li>
        <li>Usability Testing</li>
        <li>Information Architecture</li>
        <li>Wireflow & Journey Mapping</li>
      </ul>
    </motion.div>

    {/* Tools & Collaboration */}
    <motion.div 
      className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
      variants={fadeInUp}
      {...cardHover}
    >
      <FaTools className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">Tools & Collaboration</h3>
      <ul className="text-secondary space-y-2">
        <li>Figma Plugins & Design Systems</li>
        <li>Notion / Miro / FigJam</li>
        <li>Slack & Jira Workflow</li>
        <li>Version Control & Handoff Tools</li>
      </ul>
    </motion.div>
  </motion.div>
</motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
          <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
           <p className="text-primary mb-2">Afronex Tech Hub • 2024 - 2025</p>
         <ul className="text-secondary list-disc list-inside space-y-2">
  <li>Designed and prototyped multiple web and mobile applications using Figma, improving usability and visual appeal.</li>
  <li>Developed and maintained design systems to ensure consistency across projects and streamline collaboration with developers.</li>
  <li>Collaborated with cross-functional teams to translate business requirements into intuitive and user-friendly interfaces.</li>
</ul>

          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
          <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
<p className="text-primary mb-2">Maba Apparel Design • 2023 - 2024</p>
<ul className="text-secondary list-disc list-inside space-y-2">
  <li>Designed and developed visually appealing and intuitive user interfaces for web and mobile applications.</li>
  <li>Created high-fidelity mockups and interactive prototypes using Figma to streamline development handoff.</li>
  <li>Maintained design systems and style guides to ensure consistency across multiple projects.</li>
</ul>

          </motion.div>

           <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
        <h3 className="text-xl font-semibold mb-2">UI/UX Designer</h3>
<p className="text-primary mb-2">ET-656-Compassion • 2023 - 2024</p>
<ul className="text-secondary list-disc list-inside space-y-2">
  <li>Crafted engaging and user-friendly interfaces for web and mobile platforms, focusing on clarity and visual hierarchy.</li>
  <li>Produced interactive prototypes and design mockups in Figma to facilitate smooth collaboration with development teams.</li>
  <li>Developed and maintained reusable design components and style guidelines to ensure consistent branding across projects.</li>
</ul>

          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary mb-2">Bahirdar University • 2022 - 2026</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 