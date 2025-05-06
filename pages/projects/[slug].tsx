import { GetStaticPaths, GetStaticProps } from 'next';
import { Project } from '../../types'; // Adjust the path if necessary
import Image from 'next/image'; // Import the Image component from next/image
import { projects } from '../../data/projects';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = projects.map((proj) => ({
    params: { slug: proj.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  return {
    props: { project },
  };
};

export default function Project({ project }: { project: Project }) {
  return (
    <main className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p>{project.description}</p>
      
      {/* Replace <img> with <Image> */}
      <Image
        src={project.image}  // The image path (ensure it's a valid path in your public directory)
        alt={project.title}   // Alt text for accessibility
        width={500}           // Set width for the image
        height={300}          // Set height for the image
      />
    </main>
  );
}
