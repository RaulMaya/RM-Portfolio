import React from "react";
import { Link } from 'react-router-dom';
import { GiTechnoHeart } from "react-icons/gi";

const techStackObj = [{
  "name": "Python",
  "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
},
{
  "name": "JavaScript",
  "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
},
{
  "name": "React",
  "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
},
{
  "name": "Handlebars",
  "image": "https://vahid.blog/post/2021-03-19-how-to-use-handlebars.js-for-templating/featured.png"
},
{
  "name": "Express",
  "image": "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
},
{
  "name": "NodeJS",
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
},
{
  "name": "Selenium",
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png"
},
{
  "name": "Django",
  "image": "https://static.djangoproject.com/img/logos/django-logo-positive.png"
},
{
  "name": "Podman",
  "image": "https://podman.io/assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"
},
{
  "name": "Visual Basic",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/1024px-VB.NET_Logo.svg.png"
},
{
  "name": "Tailwind",
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
},
{
  "name": "Chakra UI",
  "image": "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true."
},
{
  "name": "Terraform",
  "image": "https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg"
},
{
  "name": "GCP",
  "image": "https://www.serviops.ca/wp-content/uploads/et_temp/Google-Cloud-Platform-GCP-Logo-95213_1080x675.png"
},
{
  "name": "SQL",
  "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
},
{
  "name": "GraphQL",
  "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
},
{
  "name": "D3",
  "image": "https://raw.githubusercontent.com/d3/d3-logo/master/d3.png"
}]


const TechStack = () => {
  const stacks = techStackObj.map(o => {
    return <img key={o.name} className="object-contain h-20 w-20 w-1/5 py-4" src={o.image} alt={o.name} />
  })
  return (
    <article className="container m-auto border-2 border-black shadow-xl rounded-lg px-5 pt-5 w-full">
      <p className="mb-7 flex justify-center gap-x-4 items-center font-semibold tracking-widest text-xl">
        <GiTechnoHeart />
        My Tech Stack
      </p>
      <div className="container flex justify-evenly flex-wrap">
        {stacks}
      </div>
      <Link to="/projects"><button className="border-t-2 border-cyan-400 font-semibold text-gray-400 hover:text-black transition-all min-w-full mt-5 tracking-widest py-2 text-sm">Visit Projects</button></Link>
    </article >
  );
};

export default TechStack;
