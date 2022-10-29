import { SyntheticEvent } from "react";
import axios from "axios";
export const searchSlug = (event: React.FormEvent<HTMLInputElement>) => {
  const value = event.target.value;
  if (!value) {
    return;
  }

  const query = value.trim().toLowerCase();

  console.log("query es", query);
};
