import { GetStaticPaths, GetStaticProps } from "next";
import { projects } from "../../data/projects";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = projects.map((proj) => ({
    params: { slug: proj.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  return { props: { project } };
};

export default function Project({ project }: any) {
  return (
    <main className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      
      <img
        src={project.image}
        alt={project.title}
        className="mt-4 mb-6 max-w-full h-auto rounded-md shadow-lg"
      />
      
      <p className="mb-4">{project.description}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Case Study</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium">Problem</h3>
          <p>{project.problem}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium">Solution</h3>
          <p>{project.solution}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium">Outcome</h3>
          <p>{project.outcome}</p>
        </div>
      </div>
    </main>
  );
}
