import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import "../../styles/post.css";
import Header from "@/components/Header";
import bg from "../../public/bg.jpg";

export default function Post({ frontmatter, content }) {
  const styling = {
    backgroundImage: `url('${bg.src}')`,
    backgroundSize: "cover",
  };

  // The page for each post
  const { title, date } = frontmatter;

  return (
    <main style={styling}>
      <Header />
      <div className="glass">
        <h1>{title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </main>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
