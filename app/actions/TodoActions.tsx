"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/Prisma";
export async function create(title: string) {
  await prisma.todo.create({ data: { title: title } });
  revalidatePath("/");
}
export async function edit({ id, title }: { id: string; title: string }) {
  await prisma.todo.update({
    where: { id },
    data: { title },
  });
  revalidatePath("/");
}
export async function deleteTodoFunc(id: string) {
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}
export async function todoStatus(id: string) {
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) return;
  const updatedStatus = !todo.isCompleted;
  await prisma.todo.update({
    where: { id: id },
    data: { isCompleted: updatedStatus },
  });
  revalidatePath("/");
  return updatedStatus;
}
