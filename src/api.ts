import { z } from "zod"
import type { UserLoggedInData } from "./types"

export type API = {
    // Auth
    "auth/CurrentUserFetch": { user: "required", input: {}, output: UserLoggedInData }
    "auth/SessionLogOut": {user: "required", input: {}, output: void}
    // App
    "app/FeaturedImagesFetch": {user: "optional", input: string, output: number}
}

type GetApiRouteGroupPart<Route> = Route extends `${infer Group}/${string}` ? Group : never
type GetApiRouteMethodPartFromGroup<Route,Group extends string> = Route extends `${Group}/${infer Method}` ? Method : never
type MakeApiRoute<Group extends string,Method extends string> = `${Group}/${Method}`

type ClientApiInterface = { 
    [Route in keyof API]: 
    API[Route]["user"] extends "required" ?
    (input: API[Route]["input"], apiKey: string) => Promise<API[Route]["output"]> :
    API[Route]["user"] extends "optional" ?
    (input: API[Route]["input"], apiKey?: string | undefined) => Promise<API[Route]["output"]> :
    API[Route]["user"] extends "none" ?
    (input: API[Route]["input"]) => Promise<API[Route]["output"]> :
    never
}

type ServerApiHandler<UserLookup, Input, Output> = 
    UserLookup extends "required"  ?
    {user: "required", inputValidator: (data: unknown) => Input, requestHandler: (input: Input, user: UserLoggedInData) =>  Promise<Output>} :
    UserLookup extends "optional"  ?
    {user: "optional", inputValidator: (data: unknown) => Input, requestHandler: (input: Input, user?: UserLoggedInData | undefined) =>  Promise<Output>} :
    UserLookup extends "none"  ?
    {user: "none", inputValidator: (data: unknown) => Input, requestHandler: (input: Input) =>  Promise<Output>} :
    never

type ServerApiInterface = {
    [RouteGroup in GetApiRouteGroupPart<keyof API>]: {
        [RouteMethod in GetApiRouteMethodPartFromGroup<keyof API, RouteGroup>]: 
            MakeApiRoute<RouteGroup, RouteMethod> extends keyof API ? (
                API[MakeApiRoute<RouteGroup, RouteMethod>] extends { user: infer UserLookup, input: infer Input, output: infer Output } ? 
                ServerApiHandler<UserLookup, Input, Output> : 
                never
            ): 
            never
    }
}