import type { UserLoggedInData } from "./types";
export type API = {
    "auth/CurrentUserFetch": {
        user: "required";
        input: {};
        output: UserLoggedInData;
    };
    "auth/SessionLogOut": {
        user: "required";
        input: {};
        output: void;
    };
    "app/FeaturedImagesFetch": {
        user: "optional";
        input: string;
        output: number;
    };
};
