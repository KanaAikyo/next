import { db } from "@/db";
import Link from "next/link";

async function GetData({ params }: any) {
  "use server";
  const block = await db.block.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  console.log("block", block);
  return (
    <>
      <h1 className="font-bold m-2 p-2">Detail page</h1>
      <h1 className="border rounded p-2 w-full  m-2">
        <span className="font-bold">Title: </span>
        {block?.title}
      </h1>
      <p className="border rounded p-2 w-full m-2">
        <span className="font-bold">Tag: </span>
        {block?.tag}
      </p>
      <p className="border rounded p-2 w-full m-2 h-56">
        <span className="font-bold">code: </span>
        {block?.code}
      </p>
      <div className="flex">
        <Link
          href={{ pathname: "/edit", query: { Id: params.id } }}
          className="rounded bg-teal-800 w-1/6 text-white p-2 m-2 border roundeds"
        >
          Edit
        </Link>
        <Link
          href={"/"}
          className="rounded bg-teal-800 w-1/6  text-white p-2 m-2 border roundeds"
        >
          Back
        </Link>
        <Link
          href={`/blocks/delete?id=${params.id}`}
          className="rounded bg-teal-800 w-1/6 text-white p-2 m-2 border roundeds"
        >
          Delete
        </Link>
      </div>
    </>
  );
}

export default GetData;
