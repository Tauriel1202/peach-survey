"use server";
import { MongoClient } from "mongodb";
import { redirect } from "next/navigation";

async function update(userdata) {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const session = client.startSession();
  try {
    await session.withTransaction(async () => {
      const collection = client.db("yw").collection("peeps");
      await collection.insertOne(userdata, { session });
    });
  } finally {
    await session.endSession();
    await client.close();
  }
}

export default async function handleSubmit(e) {
  console.log(e);
  let data = Array.from(e.entries()).reduce(
    (result, [key, value]) => Object.assign(result, { [key]: value }),
    {},
  );
  data["username"] = `${data["adjs"]}${data["objs"]}${data["animals"]}`;
  delete data["adjs"];
  delete data["objs"];
  delete data["animals"];

  let keys = Object.keys(data);
  if (keys[0].includes("$ACTION_ID")) {
    delete data[keys[0]];
  }

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
