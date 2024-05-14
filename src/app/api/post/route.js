"use server";
import { MongoClient } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

async function update(userdata) {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const session = client.startSession();
  try {
    await session.withTransaction(async () => {
      const collection = client.db("peach").collection("peach");
      await collection.insertOne(userdata, { session });
    });
  } finally {
    await session.endSession();
    await client.close();
  }
}

export async function POST(req, res) {
  let body = await req.text()
  console.log(body)

  let searchParams = new URLSearchParams(body)
  let data = Array.from(searchParams.entries()).reduce(
    (result, [key, value]) => Object.assign(result, { [key]: value }),
    {},
  )

  handleSurveyData(data)
  return NextResponse.json({success: true}, {status:200})
}

function handleSurveyData(data) {
  // let data = Array.from(e.entries()).reduce(
  //   (result, [key, value]) => Object.assign(result, { [key]: value }),
  //   {},
  // );
  data["username"] = `${data["adjs"]}${data["objs"]}${data["animals"]}`;
  delete data["adjs"];
  delete data["objs"];
  delete data["animals"];

  let keys = Object.keys(data);
  if (keys[0].includes("$ACTION_ID")) {
    delete data[keys[0]];
  }

  console.log(data)
  try {
    update(data).then(() => {
      console.log("success");
    });
  } catch (error) {
    console.log(error);
    return;
  }
  redirect("/done");
}

export async function GET(){
    return NextResponse.json({message:"hello world"}, {status:200})
}