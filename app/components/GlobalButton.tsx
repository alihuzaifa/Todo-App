"use client";
import { ReactNode } from "react";
import clsx from "clsx";
interface Todo {
  onClick: any;
  actionButton: boolean | true;
  children: React.ReactNode;
  disabled?: boolean;
}
const GlobalButton = ({
  onClick,
  actionButton,
  children,
  disabled = false,
}: Todo) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        actionButton && `bg-orange-700 rounded-full p-2 text-white`,
        `bg-orange-700 px-2 text-white`
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
  //   return <Button actionButton text={<BsFillTrashFill />} type="submit" />;
};
export default GlobalButton;
