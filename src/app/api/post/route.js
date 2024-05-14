"use server";
import { MongoClient } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

async function update(userdata) {
  const uri = process.env.MONGO_URI;
  console.log("broken useless junk:", uri, process.env);
  const client = new MongoClient(uri);
  console.log("created client");

  console.log("connected client");
  try{
    await client.connect()
  }
  catch(e){
    console.log("Client error", e)
  }
  console.log("starting db update");
  const collection = client.db("yw").collection("peeps");
  console.log("inserting data");
  try{
    await collection.insertOne(userdata);
  } catch(e) {
    console.log(e);
  }
  console.log("finished 💩");
}

export async function POST(req, res) {
  let body = await req.text();
  console.log(body);

  let searchParams = new URLSearchParams(body);
  let data = Array.from(searchParams.entries()).reduce(
    (result, [key, value]) => Object.assign(result, { [key]: value }),
    {}
  );

  handleSurveyData(data);
  console.log("moved on");
  return NextResponse.json({ success: true }, { status: 200 });
}

async function handleSurveyData(data) {
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

  console.log(data);
  // try {
  await update(data).then(() => {
    console.log("success");
    redirect("/done");
  });
  // } catch (error) {
  // console.log(error);
  // return;
  // }
}

export async function GET() {
  return NextResponse.json({ message: "hello world" }, { status: 200 });
}
