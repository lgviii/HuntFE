import { useRouter } from "next/router";
import Layout from "../components/MyLayout";
import Buttons from "../components/list/index";

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
      <Buttons />
    </Layout>
  );
};

export default Page;
