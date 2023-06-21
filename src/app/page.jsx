/* eslint-disable react/jsx-wrap-multilines */
import Image from 'next/image';
import Link from 'next/link';

import QRCode from 'react-qr-code';

const revalidate = 600;

export default async function Home() {
  const response = await fetch('https://api.github.com/users/ulissus/repos');
  const repos = await response.json();

  const projects = repos.map(item => {
    const link = {
      id: item.id,
      name: item.name,
    };
    return link;
  });

  return (
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
        <div>
          <h2>Habilidades</h2>

          <ul>
            <li>Genio</li>
            <li>Bilionário</li>
            <li>Filantropo</li>
          </ul>
        </div>

        <div>
          <h2>Projetos</h2>

          <ul>
            {projects.map(({ id, name }) => {
              return (
                <li>
                  {name}
                  <Link href={`/projeto/${id}`}>Mais detalhes</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2>Formação</h2>

          <ul>
            <li>Física (MIT)</li>
            <li>Engenharia Elétrica (MIT)</li>
          </ul>
        </div>
      </section>

      <footer>
        <span>Entre em contato</span>
        <QRCode
          size={256}
          style={{
            maxWidth: '200px',
            padding: '15px',
          }}
          value={'https://wa.me/5511000000'}
          viewBox={`0 0 256 256`}
        />
        <span>tony@stark.com</span>
      </footer>
    </main>
  );
}
