import { db } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

export default function blockCreatePage({ params }: any) {
  // const router = useRouter();
  // const { param1 } = router.query;
  console.log("edit", params, params.id);
  async function editBlock(formDate: FormData) {
    "use server";
    //GEt the data out of the form
    const title = formDate.get("title") as string;
    const tag = formDate.get("tag") as string;
    const code = formDate.get("code") as string;
    //create a new block in our database using prisma
    // await db.block.create({ data: { title, tag, code } });
    //redirect user
  }

  return (
    <form action={editBlock}>
      <h3 className="font-bold mt-10 mb-10">Create a Block</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="tag">
            tag
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="tag"
            id="tag"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            name="code"
            id="code"
          />
        </div>
        <button
          type="submit"
          className="rounded p-2 bg-blue-400 text-center text-white mx-auto w-11/12"
        >
          Create
        </button>
      </div>
    </form>
  );
}
