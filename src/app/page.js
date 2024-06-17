import { Form } from "@/components/form";
import { Card } from "@/components/card";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/F07f9bj18V00", {
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <div className="bg- h-screen font-custom">
      <section className="mt-4 mb-4">
        <div className="text-center text-2xl font-bold mb-2">MY JOURNAL</div>
        <Form />
      </section>

      <section className="flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold text-black mb-4">Journal List</h1>
        <div className="flex flex-col w-4/5">
          {data.map((item) => {
            return <Card key={item._id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
}
