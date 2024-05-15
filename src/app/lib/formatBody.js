export default async function formatBody(req) {
  let body = await req.text();

  let searchParams = new URLSearchParams(body);
  let data = Array.from(searchParams.entries()).reduce(
    (result, [key, value]) => Object.assign(result, { [key]: value }),
    {}
  );

  data["username"] = `${data["adjs"]}${data["objs"]}${data["animals"]}`;
  delete data["adjs"];
  delete data["objs"];
  delete data["animals"];
  
  let keys = Object.keys(data);
  if (keys[0].includes("$ACTION_ID")) {
    delete data[keys[0]];
  }
  return data;
}
