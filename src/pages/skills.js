import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"

export default function Skills() {
  const frontEnd = [
    "HTML", "CSS/SASS", "CSS Frameworks", "React, Angular, Vue", "JQuery,JavaScript/ES6+", "Responsive Design", "Typescript",
  ]
  const backend = [
    "Backend MVC with NodeJS", "ExpressJs/KoaJs", "Authentication / Authorization",
    "Templating with hbs, ejs", "RESTFUL API Design/Dev", "GraphQL Server",
    "NPM, Nodejs, Gulp etc."
  ]
  const databases = ["msSQL", "mySQL", "MongoDB", "Data modelling", "Normalization"]
  const devops = ["AWS EC2/S3", "Google  Cloud", "Git", "APIs", "CI/CD", "Testing (Unit, Integration)"]

  const extra = ["App design with Adobe XD", "App dev with React Native",
    "Project management with Jira, Confluence, Git etc.", "Cross-browser dev/testing", "Agile (SCRUM)",
  ]
  const gradient = '#f6e05e'
  const skillClasses = 'flex-1 mt-5 bg-gray-900 rounded-lg sm:w-full shadow m-3 px-6 pb-3'

  return (

    <Layout>
      <SEO title="Home" />
      <div className="flex-row lg:flex" data-sal="slide-down" data-sal-delay="200">
        <div className={skillClasses} >
          <h1 className="text-3xl text-center text-gray-200">Front-end</h1>
          <ul className="self-center lg:w-2/4 mx-auto text-gray-400 p-6" >
            {frontEnd.map((skill, i) => <li key={i} className='my-1 text-lg'> {skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses}  >
          <h1 className=" text-3xl text-center text-gray-200">Back-end</h1>
          <ul className="justify-center lg:w-3/4 mx-auto text-gray-400 p-6">
            {backend.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>
      </div>

      <div className="flex-row lg:flex mt-5" data-sal="slide-down" data-sal-delay="200">

        <div className={skillClasses} data-sal="slide-down" data-sal-delay="200" >
          <h1 className="text-3xl text-center text-gray-200">Databases</h1>
          <ul className="self-center w-3/4 mx-auto text-gray-400 p-6">
            {databases.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses}>
          <h1 className='text-3xl text-center text-gray-200'>Devops</h1>
          <ul className="self-center mx-auto    text-gray-400 p-6" >
            {devops.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

        <div className={skillClasses}>
          <h1 className='text-3xl text-center text-gray-200'>Extras</h1>
          <ul className="self-center mx-auto text-gray-400 p-6" >
            {extra.map((skill, i) => <li key={i} className='my-1 text-lg'>{skill}</li>)}
          </ul>
        </div>

      </div>
    </Layout>

  );
}
