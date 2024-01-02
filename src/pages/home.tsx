import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();

  console.log(data);

  return (
    <main>
      <h2>Home page</h2>
    </main>
  );
}
