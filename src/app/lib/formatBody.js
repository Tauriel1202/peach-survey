export default async function formatBody(req){
    let body = await req.text();
  
    let searchParams = new URLSearchParams(body);
    let data = Array.from(searchParams.entries()).reduce(
      (result, [key, value]) => Object.assign(result, { [key]: value }),
      {}
    );
    return data;
}