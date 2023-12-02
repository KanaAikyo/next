import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteRecord({ params }: any) {
  console.log(params);

  //   const deletedRecord = await db.block.delete({
  //   where: {
  //     id: parseInt(params.id),
  //    },

  //  });
  //  console.log('Deleted Record:', deletedRecord);
  redirect("/");
}
