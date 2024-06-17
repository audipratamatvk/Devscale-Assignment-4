import { Form } from "@/components/form";
import { Card } from "@/components/card";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/F07f9bj18V00", {
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <div className="font-custom bg-gradient-to-b from-gray-400 to-gray-200 min-h-screen">
      <section className="">
        <div className="text-center text-2xl font-bold mb-2 pt-4">
          MY JOURNAL
        </div>
        <Form />
      </section>

      <section className="flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold text-black mb-4">Journal List</h1>
        <div className="flex flex-col w-4/5">
          {data.length === 0 ? (
            <img
              src="/img/void.jpg"
              alt="No data available"
              className="self-center max-w-2xl"
            />
          ) : (
            data.map((item) => {
              return <Card key={item._id} item={item} />;
            })
          )}
        </div>
      </section>
    </div>
  );
}
