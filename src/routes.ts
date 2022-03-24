import { Response, Request } from "express";

import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Roberto",
    email: "raszanin@gmail.com",
    password: "12346",
    techs: [{}],
  });

  console.log(user);

  return response.json({ message: "Hello World" });
}
