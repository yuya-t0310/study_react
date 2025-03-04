import Link from "next/link";
import { navList } from "../data/nav";

// app/page.js リクエストが飛んできたときに表示されるコンポーネントを記述する場所
export default function Home() {
  return (
    <ul>
      {navList.map((item) => {
        return (
          <li key={item}>
            <Link href={`/${item}`}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
