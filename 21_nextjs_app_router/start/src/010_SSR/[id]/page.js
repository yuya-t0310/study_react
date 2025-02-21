// []で囲まれたフォルダは動的にパスが変わることを示す

import { ENDPOINT } from '@/constants';
import Article from '@/components/article';

// サーバー側
export default async function SSR({ params }) {

  console.log(params);

  const article = await fetch(`${ENDPOINT}/${params.id}`, {
    next : {revalidate:10} // 10秒以内であればキャッシュを利用
  }).then(res => res.json());

  //next.jsのfetch関数
  //第二引数にオプションを設定できる

  return (
    <>
    <div>SSR Page</div>
    <Article data={article} />
    </>    
  )
}