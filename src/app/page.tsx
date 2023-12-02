import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const blocks = await db.block.findMany();
  const renderdBlocks = blocks.map((block: any) => (
    // a tag full page load //Link will be parcial
    <Link
      className="flex justify-between items-center p-2 border rounded"
      key={block.id}
      href={`/blocks/${block.id}`}
    >
      {block.title}
      <div>View</div>
    </Link>
  ));

  return (
    <>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Block</h1>
        <Link
          className="text-white p-2 border roundeds bg-teal-800 "
          href="blocks/new"
        >
          {" "}
          New{" "}
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderdBlocks}</div>
    </>
  );
}
