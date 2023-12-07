import React from "react";
import Link from "next/link";
import { boards } from "@/components/objects/fakeData";

export default function Posts() {
  return (
    <div>
      {boards.map((board: any, key: any) => (
        <Link href="/boards/[board]" as={`boards/${board}`} key={key}>
        </Link>
      ))}
    </div>
  );
};