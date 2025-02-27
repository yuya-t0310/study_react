// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
import { ENDPOINT } from "@/constants";

export async function GET() {
  const data = await fetch(ENDPOINT).then((res) => res.json());
  // dataオブジェクトがjsonに変換されてブラウザに送信される
  return Response.json(data);
}

export async function POST(request) {
  const formData = await request.formData();
  const id = formData.get("id");
  const title = formData.get("title");
  //console.log(id, title);

  if (id === "" || title === "") {
    return Response.json({ msg: "入力フィールドが空です。" }, { status: 500 });
  }

  try {
    // catchのテスト
    //throw "error";
    // JSONサーバにPOSTメソッドを投げる
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title }),
    });
    // JSONサーバから返ってきたJSONをレスポンスとしてAPIの戻り値にする
    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json({ msg: "登録に失敗しました。" }, { status: 500 });
  }
}

export const dynamic = "force-static";
