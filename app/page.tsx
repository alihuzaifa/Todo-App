import { InputForm } from "./components/Form";
import { PrismaClient } from "@prisma/client";
import Todo from "./components/Todo";
// import Todo from "./components/shared/Todo";
const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
export default async function Home() {
  const data = await getData();
  return (
    <main>
      <div className="w-screen py-20 px-20 flex justify-center flex-col items-center">
        <span className="text-3xl font-extrabold uppercase">To-do-app</span>
        <h1 className=" text-3xl font-extrabold uppercase mb-5">
          Next.js 14
          <span className="text-orange-700 ml-2">Server Actions</span>
        </h1>
        <InputForm />
        {data.map((todo, id) => (
          <div className="w-full mt-2" key={id}>
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    </main>
  );
}
