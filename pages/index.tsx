import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>Treasure Hunt</h1>
      <ul>
        <PostLink title="This is a dynamic page example..." />
      </ul>
      <p>List of hunt puzzles</p>
      <p>Or Home page</p>
    </Layout>
  );
}
