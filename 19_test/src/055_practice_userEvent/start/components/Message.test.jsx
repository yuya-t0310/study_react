import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe("Messageコンポーネントの動作確認", () => {
  describe("初期表示の正常性確認", () => {
    test("input要素が表示されているか", () => {
      render(<Message />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl).toBeInTheDocument();
    });
  });

  describe("画面操作の正常性確認", () => {
    test("input要素に値を入力したとき正しく値が更新されるか", async () => {
      const user = userEvent.setup();
      render(<Message />);
      // 初期表示
      let inputEl = screen.getByRole("textbox");
      expect(inputEl.value).toBe("");
      // 操作
      await user.type(inputEl, "こんにちは");
      expect(inputEl.value).toBe("こんにちは");
    });
  });
});
