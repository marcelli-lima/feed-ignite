import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/marcelli-lima.png",
      name: "Marcelli Lima",
      role: "Dev Frontend",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifolio",
      },
      { type: "link", content: "celi.dev/doctorcare" },
    ],
    publishedAt: new Date("2022-12-12 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/igordmf.png",
      name: "Igor Farias",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content: "Projetinho novo para vocês",
      },
      { type: "link", content: "igor.dev/doctorcare" },
    ],
    publishedAt: new Date("2022-12-14 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
