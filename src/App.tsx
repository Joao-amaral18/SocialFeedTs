import Post from "./Post";
import Header from "./components/Header";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";

function App() {
  let arra = [
    {
      author: "as vezes vc me pergunta",
      icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
      content: "Lorem ipsum dolor s.",
      authorInfo: "This is your brain",
      published: "2022-08-13 12:21:00",
    },
    {
      author: "eu mesmo ",
      icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
      content:
        "Lo orci phasellus egestas. Tincidunt arcu non sodales neque sodales ut etiam sit amet.",
      authorInfo: "This is your brain",
      published: "2022-08-13 12:21:00",
    },
    {
      author: "virtor",
      icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
      content:
        "retra. Pulvinar sapien et ligula ullamcorper. Gravida in  arcu non sodales neque sodales ut etiam sit amet.",
      authorInfo: "This is your brain",
      published: "2022-08-13 12:21:00",
    },
  ];

  let arraa = [
    {
      author: {
        id:1,
        name: "a",
        icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
        authorInfo: "This is your brain",
      },
      content: "Lorem ipsum dolor s.",
      published: new Date("2022-08-13 12:21:00"),
    },
    {
      author: {
        id:2,
        name: "a",
        icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
        authorInfo: "This is your brain",
      },
      content:
        "Lo orci phasellus egestas. Tincidunt arcu non sodales neque sodales ut etiam sit amet.",
      published: new Date("2022-08-13 12:21:00"),
    },
    {
      author: {
        id:3,
        name: "a",
        icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
        authorInfo: "This is your brain",
      },
      content:
        "retra. Pulvinar sapien et ligula ullamcorper. Gravida in  arcu non sodales neque sodales ut etiam sit amet.",
      published: new Date("2022-08-13 12:21:00"),
    },
  ];

  let profile = {
    banner:
      "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    icon: "https://avatars.githubusercontent.com/u/62806084?s=100&v=4",
    name: "Joao",
    about: "Desenvolvedor Fullstack",
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar
          banner={profile.banner}
          icon={profile.icon}
          name={profile.name}
          about={profile.about}
        />
        <main>
          {/* {arra.map((val, i) => (
            <Post
              key={i}
              icon={val.icon}
              author={val.author}
              authorInfo={val.authorInfo}
              content={val.content}
              published={val.published}
            />
          ))} */}
          {arraa.map(val => (
            <Post
              key={val.id}
              icon={val.author.icon}
              author={val.author.name}
              authorInfo={val.author.authorInfo}
              content={val.content}
              published={val.published}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
