// POINT [SG]フェッチしたデータで静的なページを作成
import { ENDPOINT } from "@/constants";
import ArticleList from "../../../components/articleList";

export async function generateMetadata({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return {
    title: article.title,
    description: article.text,
  };
}

export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then((res) => res.json());
  //console.log(data);
  return data.map((record) => ({ id: record.id }));
}

export default async function Page() {
  const articles = await fetch(ENDPOINT, { cache: "no-store" }).then((res) =>
    res.json()
  );

  if (!articles) {
    return <div>データがありません。</div>;
  }

  return (
    <>
      <h3>フェッチ&SG</h3>
      <ArticleList basePath="/030_SG_fetch" list={articles} />
    </>
  );
}
