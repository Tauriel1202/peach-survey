"use server";
import clientPromise from "@/app/lib/mongodb";
import formatBody from "@/app/lib/formatBody";
import { redirect } from "next/navigation";

export async function POST(req, res) {
  console.log("hello");
  let body = await formatBody(req);

  console.log(body);
  try {
    const client = await clientPromise;
    const db = client.db("yw");
    await db.collection("peeps").insertOne(body);
  } catch (e) {
    console.error(e);
  }
  redirect("/done");
}
