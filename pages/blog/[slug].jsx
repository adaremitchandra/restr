import axios from "axios";
import { useEffect, useState } from "react";

const Detail = ({ post }) => {
  const html = post[0]?.content.rendered;

  useEffect(() => {
    getRate();
  }, []);

  const [list, setList] = useState([]);

  const getRate = async () => {
    try {
      const res = await axios.get("https://sandbox-api.adaremit.com/api/v1/kursfee");
      setList(res.data.transaction);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} className="p-4" />
      <div className="h-10 w-10 text-9xl">{list[0]?.sell}</div>
    </div>
  );
};

export default Detail;

export async function getStaticPaths() {
  let data = [];
  const res = await axios("https://blogr.adaremit.com/wp-json/wp/v2/posts");
  data = [...data, ...res.data];
  for (let i = 2; i <= res.headers["x-wp-totalpages"]; i++) {
    const iRes = await axios(`https://blogr.adaremit.com/wp-json/wp/v2/posts?page=${i}`);
    data = [...data, ...iRes.data];
  }

  const paths = data.map((item) => ({
    params: {
      slug: `${item.slug}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  const res = await fetch(`https://blogr.adaremit.com/wp-json/wp/v2/posts?slug=${slug}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
