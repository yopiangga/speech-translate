import React from "react";

import { CombineComponents } from "./CombineComponents";
import { LoadingProvider } from "./LoadingContext";
import { UserProvider } from "./UserContext";

const providers = [
  UserProvider,
  LoadingProvider,
];
export const AppContextProvider = CombineComponents(...providers);
