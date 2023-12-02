import { db } from "@/db";
import Link from "next/link";

async function GetData({ params }: any) {
  const block = await db.block.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  async function deleateBlock() {
    const deleateOne = await db.block.delete({
      where: {
        id: parseInt(params.id),
      },
    });
    window.location.href = "/";
  }

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
          href={`/blocks/${params.id}/edit`}
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
        <button
          //   onDelete={deleateBlock}
          className="rounded bg-teal-800 w-1/6 text-white p-2 m-2 border roundeds"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default GetData;
