"use client";
import { todoType } from "@/types/todoTypes";
import GlobalButton from "./GlobalButton";
import { BsFillTrashFill } from "react-icons/bs";
import { deleteTodoFunc, todoStatus } from "../actions/TodoActions";
import { useToast } from "@/components/ui/use-toast";
import { AiOutlineCheckCircle } from "react-icons/ai";
import EditTodo from "./EditTodo";
const Todo = ({ todo }: { todo: todoType }) => {
  const { toast } = useToast();
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  const deleteTodo = async (id: string) => {
    await deleteTodoFunc(id);
    toast({ title: "Deleted Successfully" });
  };
  const updateStatus = async (id: string) => {
    await todoStatus(id);
    toast({ title: "Status Updated Successfully" });
  };
  return (
    <div
      className="w-full  flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <GlobalButton onClick={() => updateStatus(todo?.id)} actionButton={true}>
        <AiOutlineCheckCircle />
      </GlobalButton>
      <span className="text-center font-bold uppercase">{todo.title}</span>
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <GlobalButton
          onClick={() => deleteTodo(todo?.id)}
          actionButton={true}
          disabled={todo?.isCompleted}
        >
          <BsFillTrashFill />
        </GlobalButton>
      </div>
    </div>
  );
};
export default Todo;
