import { KeyboardEvent } from "react";

export function onlyNumbers(e: KeyboardEvent<HTMLInputElement>) {
  const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];

  const isNumberKey = e.key >= "0" && e.key <= "9";
  const isAllowedKey = allowedKeys.includes(e.key);

  if (!isNumberKey && !isAllowedKey) {
    e.preventDefault();
  }
}
