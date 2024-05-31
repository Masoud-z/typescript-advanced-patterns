import { Equal, Expect } from "../helpers/type-utils";

interface User {
  id: string;
}

export class SDK {
  constructor(public loggedInUser?: User) {}

  // How do we type this assertion function?
  assertIsLoggedIn(): asserts this is this & { loggedInUser: User } {
    if (!this.loggedInUser) {
      throw new Error("Not logged in");
    }
  }

  createPost(title: string, body: string) {
    type test1 = Expect<Equal<typeof this.loggedInUser, User | undefined>>;

    this.assertIsLoggedIn();

    type test2 = Expect<Equal<typeof this.loggedInUser, User>>;
  }
}
