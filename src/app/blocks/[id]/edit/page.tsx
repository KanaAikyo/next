import { db } from "@/db";
// import { useState, useEffect } from "react";

export default async function blockCreatePage({ params }: any) {
  "use server";
  const block = await db.block.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  // const [titleValue, setTitleValue] = useState(block?.code);
  // const [tagValue, setTagValue] = useState(block?.tag);
  // const [codeValue, setCodeValue] = useState(block?.code);

  async function editBlock(formDate: FormData) {
    //GEt the data out of the form
    // const title = titleValue;
    // const tag = tagValue;
    // const code = codeValue;
    // const order = await db.block.update({
    //   where: {
    //     id: parseInt(params.id),
    //   },
    //   data: { title, tag, code },
    // });
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
            // value={titleValue}
            // onChange={(e) => setTitleValue(e.target.value)}
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
            // value={tagValue}
            // onChange={(e) => setTagValue(e.target.value)}
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
            // value={codeValue}
            // onChange={(e) => setCodeValue(e.target.value)}
          />
        </div>
        <input
          type="submit"
          // onSubmit={editBlock()}
          // className="rounded p-2 bg-blue-400 text-center text-white mx-auto w-11/12"
        />
      </div>
    </form>
  );
}
