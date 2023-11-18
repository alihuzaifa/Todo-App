"use client";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { todoType } from "@/types/todoTypes";
import GlobalButton from "./GlobalButton";
import { Input } from "@/components/ui/input";
import { edit } from "../actions/TodoActions";
import { useToast } from "@/components/ui/use-toast";
const EditTodo = ({ todo }: { todo: todoType }) => {
  const { toast } = useToast();
  const [editTodo, setEditTodo] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const handleEdit = () => {
    setEditTodo(!editTodo);
  };
  const handleSave = () => {
    if (!updatedTitle) return;
    edit({ id: todo?.id, title: updatedTitle });
    setUpdatedTitle("");
    setEditTodo(false);
    toast({ title: "Todo Updated Successfully" });
  };
  return (
    <div className="flex gap-5 items-center">
      <GlobalButton onClick={handleEdit} actionButton={true}>
        <BiEdit />
      </GlobalButton>
      {editTodo ? (
        <div className="flex justify-center">
          <Input
            type="text"
            name="updatedTitle"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e?.target?.value)}
            placeholder="Edit Todo..."
          />
          <Button onClick={handleSave}>Save</Button>
        </div>
      ) : null}
    </div>
  );
};
export default EditTodo;