"use client";

import { Header } from "@/commons/layout/02-03-layout-header-local/ header";
import { useEffect, useState } from "react";

export default function LayoutHeaderLocalPage() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    // 3초가 걸려서 boardId인 게시글 데이터를 받음
    setTimeout(() => {
      const result = "철수가쓴글"; // 제목
      setTitle(result);
    }, 3000);
  }, []);

  return (
    <div>
      <Header title={title} />
      검색하기: <input />

      <div>내용입니다~</div>
      <div>내용입니다~</div>
      <div>내용입니다~</div>
      <div>내용입니다~</div>
      <div>내용입니다~</div>
    </div>
  );
}
