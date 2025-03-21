import { render, screen } from "@testing-library/react";
import GetUserData from "./GetUserData";
import { ENDPOINT_URL } from "../Example";

describe("GetUserDataコンポーネントの動作確認", () => {
  test("外部データ取得中", () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const h1El = screen.getByRole("heading", { name: "通信中です！" });
    expect(h1El).toBeInTheDocument();
  });

  test("外部データの取得後", async () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    // findByRole 非同期　一致するものが見つかるまで待機する
    const h2El = await screen.findByRole("heading", { name: "プロフィール" });
    screen.debug(h2El);
    expect(h2El).toBeInTheDocument();

    const itemEls = await screen.findAllByRole("listitem");
    screen.debug(itemEls);
    expect(itemEls[0].textContent).toBe("ID: 1");
    expect(itemEls[1].textContent).toBe("Name: CodeMafia");
  });
});
