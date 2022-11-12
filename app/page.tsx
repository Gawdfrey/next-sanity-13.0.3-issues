import { client } from "../lib/sanity";

export default async function Page() {
  const projects = await getData();
  return <p>hello world</p>;
}

async function getData() {
  return await client.fetch(
    `*[_type == "projects"]{
            description,
            name,
            image,
            facts
            }`
  );
}
