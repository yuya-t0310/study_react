"use client"
// Hooksを使う場合は上記の記述が必要
// クライアントでjavascriptの実行が必要なことを示す

import { useEffect, useState } from "react"

// クライアント側
export default function ClientComp() {
  const [state, setState] = useState(undefined);
  // クライアントサイドで動かしたいもの
  useEffect(() => {
    setState('client loaded')
  },[])
  return (
    <>
    <div>{state}</div>
    </>
  )
}