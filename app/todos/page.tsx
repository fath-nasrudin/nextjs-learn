import { Button } from "../components/ui/Button";

async function getTodos() {
  return { message: "Dummy Todo" };
}

export default async function Todos() {
  const todos = await getTodos();
  return (
    <div>
      <h1>Todos</h1>
      <Button>Hello</Button>
      <p>{JSON.stringify(todos, null, 2)}</p>
    </div>
  );
}
