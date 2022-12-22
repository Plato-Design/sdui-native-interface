export type JSONValue = string | number | boolean | {
    [x: string]: JSONValue;
} | Array<JSONValue>;
export declare enum GlobalRole {
    SUPERADMIN = 0,
    CUSTOMER = 1,
    UNKNOWN = 2
}
export type User = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role: GlobalRole;
    isEmailVerified: boolean;
    didAgreeToTOS: boolean;
    doAutoTrainEntities: boolean;
    userPrivilegedId: string;
};
export declare enum SubscriptionPlanStatus {
    NO_SUBSCRIPTION = 0,
    SUBSCRIBED = 1,
    CANCELLED = 2
}
export type UserPrivileged = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string | null;
    emailVerificationToken: string | null;
    nonce: string | null;
    subscriptionPlan: string | null;
    subscriptionPlanStatus: SubscriptionPlanStatus;
    stripeCustomerId: string | null;
    numGeneratedImagesRemaining: number;
    numHighResDownloadsRemaining: number;
    numMaxAvatarsAllowed: number;
    stripeBillingErrorMessage: string | null;
    hasEverPaid: boolean;
    isUnsubscribedFromEmails: boolean;
    intercomUserHash: string | null;
    apiKey: string;
    inviteCode: string | null;
};
export declare enum Status {
    idle = 0,
    review = 1,
    queued = 2,
    pushing = 3,
    starting = 4,
    processing = 5,
    succeeded = 6,
    failed = 7,
    cancelled = 8,
    canceled = 9
}
export type TrainedEntity = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    status: Status;
    replicateTrainingId: string | null;
    replicateModelVersionId: string | null;
    replicateModelName: string;
    replicateAccountName: string;
    identifierToken: string;
    classNoun: string;
    displayName: string;
    thumbnailUrl: string;
    trainingDataZipUrl: string;
    input: JSONValue;
};
export type UserLoggedInData = {
    user: User & {
        userPrivileged: UserPrivileged;
        trainedEntities: TrainedEntity[];
    };
};
