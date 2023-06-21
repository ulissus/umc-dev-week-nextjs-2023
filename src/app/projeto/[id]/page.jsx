import Image from 'next/image';
import Link from 'next/link';

const revalidate = 600;

export default async function Projeto({ params }) {
  const response = await fetch('https://api.github.com/users/ulissus/repos', {
    next: {
      revalidate: 600,
    },
  });
  const repos = await response.json();

  const project = repos.find(item => item.id == params.id);

  return (
    <>
      <main>
        <header>
          <Image
            src={'/tony.webp'}
            placeholder="blur"
            blurDataURL={'/blur.webp'}
            width={250}
            height={250}
            alt="Image"
            priority
          />

          <h1>
            Anthony Edward Stark
            <small>Desenvolvedor Front-end</small>
          </h1>
        </header>

        <section>
          <h3>Projeto: {project.name}</h3>
          <p>
            {project.description}
            <Link href={`${project.html_url}`}>Ver no Github</Link>
          </p>
          <pre>
            git clone {project.clone_url}
            <a href={`/${project.name}.zip`}>Baixar pasta</a>
          </pre>
          <Link href={'/'}>Voltar</Link>
        </section>
      </main>
    </>
  );
}
