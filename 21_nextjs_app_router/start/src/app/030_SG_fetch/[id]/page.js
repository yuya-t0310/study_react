import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";
import {paths} from "../paths"

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}

export async function generateStaticParams() {
  return paths;
}
