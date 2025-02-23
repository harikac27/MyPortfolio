import { ProjectsProps, ProjectItemProps } from '../types/projects';

export const PROJECTSLIST: ProjectsProps = {
  projects: [
    {
      title: 'Blackfoot language learning app',
      slug: 'blakcfoot-learning-app',
      description:
        'Designed and launched a comprehensive language learning application to preserve the endangered Blackfoot language, deploying across Web, iOS, and Android platforms. This app was developed using Flutter and Dart, ensuring a uniform user experience. It integrates advanced conversational AI by leveraging GPT-4 Language Learning Models (LLMs), which provide personalized learning feedback and interactive conversation practice, enhancing user engagement and retention.',
      image: '/images/projects/Ipoyit.jpeg',
      link_github: '',
      stacks: ['Flutter', 'Dart', 'Firebase', 'GPT-4 LLM', 'REST APIs', 'Riverpod', 'HTML', 'CSS', 'AWS S3'],
      content: '',
      is_show: true,
      is_featured:false,
      updated_at: new Date(),
    },
    {
      title: 'Video Shot Boundary Detection System',
      slug: 'shot-boundary-detection-system',
      description:
        'A sophisticated video analysis tool designed to detect shot boundaries in AVI video files. Utilizing twin-comparison algorithms, it identifies hard cuts and gradual transitions, offering precise editing cues. The system includes a user-friendly GUI for easy interaction.',
      image: '/images/projects/VideoShotboundarydetection.jpeg',
      link_github: 'https://github.com/harikac27/Shot-boundary-detection',
      stacks: ['Python', 'OpenCV', 'NumPy', 'PIL', 'matplotlib',  'Video Processing', 'Algorithm Design', 'GUI Development'],
      content: '',
      is_show: true,
      is_featured: true,
      updated_at: new Date(),
    },
    {
      title: 'Image Retrieval System',
      slug: 'cbirs',
      description:
        'A Content-Based Image Retrieval system that utilizes intensity and color-code histograms to rank and retrieve images based on visual similarity. Featuring a dynamic GUI, the system enables users to interactively refine search results through relevance feedback, optimizing the retrieval accuracy.',
      image: '/images/projects/ImageRetrievalSys.jpeg',
      link_github: 'https://github.com/harikac27/Content-based-image-retrieval-system',
      stacks: ['Java', 'IntelliJ IDEA', 'Histogram Analysis'],
      content: '',
      is_show: true,
      is_featured: true,
      updated_at: new Date(),
    },
    {
      title: 'Vehicle Classification Security System',
      slug: 'vehicle-security-system',
      description:
        'A real-world security application that monitors CCTV feeds, detecting unregistered vehicles with an 80.79% accurate Support Vector Classification model.',
      image: 'images/projects/VehicleClassification.jpeg',
      stacks:  ['React', 'JavaScript', 'HTML', 'AWS S3', 'Support Vector Classification'],
      content: '',
      is_show: true,
      is_featured: true,
      updated_at: new Date(),
    },
    {
      title: 'Automatic License Plate Number Detection System using OpenCV',
      slug: 'license-plate-detection-using-opencv',
      description:
        'An efficient license plate detection system utilizing OpenCV and the K-nearest neighbors (KNN) algorithm, achieving a high accuracy of 91.6%.',
      image: '/images/projects/AutomaticLicensePlateDetectionOpenCV.jpeg',
      stacks:  ['OpenCV', 'KNN Algorithm', 'XML'],
      content: '',
      is_show: true,
      is_featured: true,
      updated_at: new Date(),
    },
  ],
};
