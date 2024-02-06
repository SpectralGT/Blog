import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import LandingScreen from "components/LandingScreen";
import bg from "../public/LPbg.jpg";

// The Blog Page Content
export default function Index({ posts }) {
  const styling = {
    backgroundImage: `url('${bg.src}')`,
    backgroundSize: "cover",
  };
  return (
    <div style={styling}>
      <LandingScreen />
      <main>
        {posts.map((post) => {
          //extract slug and frontmatter
          const { slug, frontmatter } = post;
          //extract frontmatter properties
          const { title, description, date } = frontmatter;

          //JSX for individual blog listing
          return (
            <article key={slug}>
              <Link href={`/posts/${slug}`}>
                <h1>{title}</h1>
              </Link>
              <h3>{description}</h3>
              <h3>{date}</h3>
            </article>
          );
        })}
      </main>
    </div>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");
  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
