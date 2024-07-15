import { Button } from "../components/ui/Button";

async function getTodos() {
  return { message: "Dummy Todo" };
}

export default async function Todos() {
  const todos = await getTodos();
  return (
    <div>
      <h1>Todos</h1>
      <Button href="https://google.com" intent="primary" block>
        Hello
      </Button>
      <Button href="https://google.com">Hello</Button>
      <Button href="https://google.com" intent="secondary">
        Hello
      </Button>
      <Button href="https://google.com" intent="primary">
        Hello
      </Button>
      <p>{JSON.stringify(todos, null, 2)}</p>
    </div>
  );
}
