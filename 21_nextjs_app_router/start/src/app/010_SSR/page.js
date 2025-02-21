import { ENDPOINT } from '@/constants';
import ClientComp from './components/ClientComp';
import './lib';
import ArticleList from '@/components/articleList';

// サーバー側
export default async function SSR() {

  // 副作用であるので通常はuseEffect内に記述しなければならないが、サーバーコンポーネントでは直接記述してよい
  const articles = await fetch(ENDPOINT, {
    cache: 'no-store', // 毎回キャッシュを使わない force-cacheはその逆
    next : {revalidate:10} // 10秒以内であればキャッシュを利用
  }).then(res => res.json());

  //next.jsのfetch関数
  //第二引数にオプションを設定できる

  return (
    <>
    <div>SSR Page</div>
    <ClientComp />
    <ArticleList list={articles} basePath="/010_SSR" />
    </>    
  )
}