import type { LoggedInUserPredictionImage, LoggedOutPredictionImage, UserLoggedInData, UserNativeSessionApiKey } from "./types";
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
        input: {};
        output: {
            loggedIn: true;
            images: LoggedInUserPredictionImage[];
        } | {
            loggedIn: false;
            images: LoggedOutPredictionImage[];
        };
    };
};
type GetApiRouteGroupPart<Route> = Route extends `${infer Group}/${string}` ? Group : never;
type GetApiRouteMethodPartFromGroup<Route, Group extends string> = Route extends `${Group}/${infer Method}` ? Method : never;
type MakeApiRoute<Group extends string, Method extends string> = `${Group}/${Method}`;
export type ClientApiInterface = {
    [Route in keyof API]: API[Route]["user"] extends "required" ? (input: API[Route]["input"], apiKey: string) => Promise<API[Route]["output"]> : API[Route]["user"] extends "optional" ? (input: API[Route]["input"], apiKey?: string | undefined) => Promise<API[Route]["output"]> : (input: API[Route]["input"]) => Promise<API[Route]["output"]>;
};
export type ServerApiHandler<UserLookup, Input, Output> = UserLookup extends "required" ? {
    user: "required";
    inputValidator: (data: unknown) => Input;
    requestHandler: (input: Input, user: UserLoggedInData, session: UserNativeSessionApiKey) => Promise<Output>;
} : UserLookup extends "optional" ? {
    user: "optional";
    inputValidator: (data: unknown) => Input;
    requestHandler: (input: Input, user?: UserLoggedInData | undefined, session?: UserNativeSessionApiKey | undefined) => Promise<Output>;
} : {
    user: "none";
    inputValidator: (data: unknown) => Input;
    requestHandler: (input: Input) => Promise<Output>;
};
export type ServerApiInterface = {
    [RouteGroup in GetApiRouteGroupPart<keyof API>]: {
        [RouteMethod in GetApiRouteMethodPartFromGroup<keyof API, RouteGroup>]: MakeApiRoute<RouteGroup, RouteMethod> extends keyof API ? (API[MakeApiRoute<RouteGroup, RouteMethod>] extends {
            user: infer UserLookup;
            input: infer Input;
            output: infer Output;
        } ? ServerApiHandler<UserLookup, Input, Output> : never) : never;
    };
};
export {};
