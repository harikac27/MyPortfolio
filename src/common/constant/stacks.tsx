import { FaJava } from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiReact,
  SiRedux,
  SiWebpack,
  SiWordpress,
  SiHtml5,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiAzuredevops,
  SiDocker,
  SiKubernetes,
  SiCsharp,
  SiOpenai,
  SiPython,
  SiSpringboot,
  SiGraphql,
  SiPostgresql,
  SiJenkins,
  SiFlutter
} from 'react-icons/si';
import { TbBrandAuth0 } from 'react-icons/tb';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  OpenAI: <SiOpenai size={iconSize} className='text-black-600' />,
  Spring: <SiSpring size={iconSize} className='text-green-600' />,
  'C#': <SiCsharp size={iconSize} className='text-purple-700' />,
  Kubernetes: <SiKubernetes size={iconSize} className='text-blue-600' />,
  HTML5: <SiHtml5 size={iconSize} className='text-orange-500' />,
  Java: <FaJava size={iconSize} className='text-red-600' />,
  MySQL: <SiMysql size={iconSize} className='text-blue-500' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  Azure: <SiAzuredevops size={iconSize} className='text-blue-600' />,
  Docker: <SiDocker size={iconSize} className='text-blue-400' />,
  Python: <SiPython size={iconSize} className='text-yellow-400' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-300' />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-indigo-500' />
  ),
  WordPress: <SiWordpress size={iconSize} />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-400' />,
  Redux: <SiRedux size={iconSize} className='text-purple-600' />,
  CSS: <SiCss3 size={iconSize} className='text-indigo-500' />,
  SpringBoot: <SiSpringboot size={iconSize} className='text-green-600' />,
  SpringMVC: <SiSpringboot size={iconSize} className='text-green-600' />,
  GraphQL: <SiGraphql size={iconSize} className='text-pink-500' />,
  Jenkins: <SiJenkins size={iconSize} className='text-red-600' />,
};
