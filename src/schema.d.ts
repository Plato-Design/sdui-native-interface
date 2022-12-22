import { z } from "zod";
import { JsonValue, GlobalRole, SubscriptionPlanStatus, Status, Visibility } from "./types";
export declare const jsonValueSchema: z.ZodSchema<JsonValue>;
export declare const globalRoleSchema: z.ZodNativeEnum<typeof GlobalRole>;
export declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    role: z.ZodNativeEnum<typeof GlobalRole>;
    isEmailVerified: z.ZodBoolean;
    didAgreeToTOS: z.ZodBoolean;
    doAutoTrainEntities: z.ZodBoolean;
    userPrivilegedId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role: GlobalRole;
    isEmailVerified: boolean;
    didAgreeToTOS: boolean;
    doAutoTrainEntities: boolean;
    userPrivilegedId: string;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role: GlobalRole;
    isEmailVerified: boolean;
    didAgreeToTOS: boolean;
    doAutoTrainEntities: boolean;
    userPrivilegedId: string;
}>;
export declare const userNativeSessionApiKeySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    userId: z.ZodString;
    apiKey: z.ZodString;
    expiresAt: z.ZodDate;
    loggedOut: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    apiKey: string;
    expiresAt: Date;
    loggedOut: boolean;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    apiKey: string;
    expiresAt: Date;
    loggedOut: boolean;
}>;
export declare const subscriptionPlanStatusSchema: z.ZodNativeEnum<typeof SubscriptionPlanStatus>;
export declare const userPrivilegedSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    email: z.ZodNullable<z.ZodString>;
    emailVerificationToken: z.ZodNullable<z.ZodString>;
    nonce: z.ZodNullable<z.ZodString>;
    subscriptionPlan: z.ZodNullable<z.ZodString>;
    subscriptionPlanStatus: z.ZodNativeEnum<typeof SubscriptionPlanStatus>;
    stripeCustomerId: z.ZodNullable<z.ZodString>;
    numGeneratedImagesRemaining: z.ZodNumber;
    numHighResDownloadsRemaining: z.ZodNumber;
    numMaxAvatarsAllowed: z.ZodNumber;
    stripeBillingErrorMessage: z.ZodNullable<z.ZodString>;
    hasEverPaid: z.ZodBoolean;
    isUnsubscribedFromEmails: z.ZodBoolean;
    intercomUserHash: z.ZodNullable<z.ZodString>;
    apiKey: z.ZodString;
    inviteCode: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    apiKey: string;
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
    inviteCode: string | null;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    apiKey: string;
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
    inviteCode: string | null;
}>;
export declare const statusSchema: z.ZodNativeEnum<typeof Status>;
export declare const trainedEntitySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    userId: z.ZodString;
    status: z.ZodNativeEnum<typeof Status>;
    replicateTrainingId: z.ZodNullable<z.ZodString>;
    replicateModelVersionId: z.ZodNullable<z.ZodString>;
    replicateModelName: z.ZodString;
    replicateAccountName: z.ZodString;
    identifierToken: z.ZodString;
    classNoun: z.ZodString;
    displayName: z.ZodString;
    thumbnailUrl: z.ZodString;
    trainingDataZipUrl: z.ZodString;
    input: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
}, "strip", z.ZodTypeAny, {
    input: JsonValue;
    status: Status;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    replicateTrainingId: string | null;
    replicateModelVersionId: string | null;
    replicateModelName: string;
    replicateAccountName: string;
    identifierToken: string;
    classNoun: string;
    displayName: string;
    thumbnailUrl: string;
    trainingDataZipUrl: string;
}, {
    input: JsonValue;
    status: Status;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    replicateTrainingId: string | null;
    replicateModelVersionId: string | null;
    replicateModelName: string;
    replicateAccountName: string;
    identifierToken: string;
    classNoun: string;
    displayName: string;
    thumbnailUrl: string;
    trainingDataZipUrl: string;
}>;
export declare const predictionImageSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    urlOriginal: z.ZodString;
    urlHosted: z.ZodNullable<z.ZodString>;
    urlHostedStatus: z.ZodNativeEnum<typeof Status>;
    urlUpscaled4x: z.ZodNullable<z.ZodString>;
    urlUpscaled4xStatus: z.ZodNativeEnum<typeof Status>;
    isDeleted: z.ZodBoolean;
    isFeatured: z.ZodBoolean;
    predictionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    urlOriginal: string;
    urlHosted: string | null;
    urlHostedStatus: Status;
    urlUpscaled4x: string | null;
    urlUpscaled4xStatus: Status;
    isDeleted: boolean;
    isFeatured: boolean;
    predictionId: string;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    urlOriginal: string;
    urlHosted: string | null;
    urlHostedStatus: Status;
    urlUpscaled4x: string | null;
    urlUpscaled4xStatus: Status;
    isDeleted: boolean;
    isFeatured: boolean;
    predictionId: string;
}>;
export declare const predictionSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    status: z.ZodNativeEnum<typeof Status>;
    error: z.ZodNullable<z.ZodString>;
    model: z.ZodString;
    input: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
    output: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
    startedAt: z.ZodNullable<z.ZodDate>;
    completedAt: z.ZodNullable<z.ZodDate>;
    replicateId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    input: JsonValue;
    output: JsonValue;
    status: Status;
    error: string | null;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    model: string;
    startedAt: Date | null;
    completedAt: Date | null;
    replicateId: string | null;
}, {
    input: JsonValue;
    output: JsonValue;
    status: Status;
    error: string | null;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    model: string;
    startedAt: Date | null;
    completedAt: Date | null;
    replicateId: string | null;
}>;
export declare const inputQueryPredictionSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    inputQueryId: z.ZodString;
    predictionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    predictionId: string;
    inputQueryId: string;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    predictionId: string;
    inputQueryId: string;
}>;
export declare const visibilitySchema: z.ZodNativeEnum<typeof Visibility>;
export declare const inputQuerySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    userId: z.ZodString;
    prevInputQueryId: z.ZodNullable<z.ZodString>;
    parentPredictionImageId: z.ZodNullable<z.ZodString>;
    inputText: z.ZodString;
    inputStyle: z.ZodNullable<z.ZodString>;
    inputImage: z.ZodNullable<z.ZodString>;
    inputSeed: z.ZodNumber;
    trainedEntityId: z.ZodNullable<z.ZodString>;
    numVariations: z.ZodNumber;
    visibility: z.ZodNativeEnum<typeof Visibility>;
    didSendImagePredictionRequests: z.ZodBoolean;
    metadata: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    prevInputQueryId: string | null;
    parentPredictionImageId: string | null;
    inputText: string;
    inputStyle: string | null;
    inputImage: string | null;
    inputSeed: number;
    trainedEntityId: string | null;
    numVariations: number;
    visibility: Visibility;
    didSendImagePredictionRequests: boolean;
    metadata: JsonValue;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    prevInputQueryId: string | null;
    parentPredictionImageId: string | null;
    inputText: string;
    inputStyle: string | null;
    inputImage: string | null;
    inputSeed: number;
    trainedEntityId: string | null;
    numVariations: number;
    visibility: Visibility;
    didSendImagePredictionRequests: boolean;
    metadata: JsonValue;
}>;
export declare const bookmarkedPredictionImageSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    predictionImageId: z.ZodString;
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    predictionImageId: string;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    predictionImageId: string;
}>;
export declare const dislikedPredictionImageSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    predictionImageId: z.ZodString;
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    predictionImageId: string;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    predictionImageId: string;
}>;
export declare const loggedInUserPredictionImageSchema: z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    urlOriginal: z.ZodString;
    urlHosted: z.ZodNullable<z.ZodString>;
    urlHostedStatus: z.ZodNativeEnum<typeof Status>;
    urlUpscaled4x: z.ZodNullable<z.ZodString>;
    urlUpscaled4xStatus: z.ZodNativeEnum<typeof Status>;
    isDeleted: z.ZodBoolean;
    isFeatured: z.ZodBoolean;
    predictionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    urlOriginal: string;
    urlHosted: string | null;
    urlHostedStatus: Status;
    urlUpscaled4x: string | null;
    urlUpscaled4xStatus: Status;
    isDeleted: boolean;
    isFeatured: boolean;
    predictionId: string;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    urlOriginal: string;
    urlHosted: string | null;
    urlHostedStatus: Status;
    urlUpscaled4x: string | null;
    urlUpscaled4xStatus: Status;
    isDeleted: boolean;
    isFeatured: boolean;
    predictionId: string;
}>, z.ZodObject<{
    prediction: z.ZodIntersection<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        status: z.ZodNativeEnum<typeof Status>;
        error: z.ZodNullable<z.ZodString>;
        model: z.ZodString;
        input: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
        output: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
        startedAt: z.ZodNullable<z.ZodDate>;
        completedAt: z.ZodNullable<z.ZodDate>;
        replicateId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        input: JsonValue;
        output: JsonValue;
        status: Status;
        error: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        model: string;
        startedAt: Date | null;
        completedAt: Date | null;
        replicateId: string | null;
    }, {
        input: JsonValue;
        output: JsonValue;
        status: Status;
        error: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        model: string;
        startedAt: Date | null;
        completedAt: Date | null;
        replicateId: string | null;
    }>, z.ZodObject<{
        inputQueryPredictions: z.ZodArray<z.ZodIntersection<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
            inputQueryId: z.ZodString;
            predictionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        }, {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        }>, z.ZodObject<{
            inputQuery: z.ZodObject<{
                id: z.ZodString;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                userId: z.ZodString;
                prevInputQueryId: z.ZodNullable<z.ZodString>;
                parentPredictionImageId: z.ZodNullable<z.ZodString>;
                inputText: z.ZodString;
                inputStyle: z.ZodNullable<z.ZodString>;
                inputImage: z.ZodNullable<z.ZodString>;
                inputSeed: z.ZodNumber;
                trainedEntityId: z.ZodNullable<z.ZodString>;
                numVariations: z.ZodNumber;
                visibility: z.ZodNativeEnum<typeof Visibility>;
                didSendImagePredictionRequests: z.ZodBoolean;
                metadata: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            }, {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            }>;
        }, "strip", z.ZodTypeAny, {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        }, {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        }>>, "many">;
    }, "strip", z.ZodTypeAny, {
        inputQueryPredictions: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        } & {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        })[];
    }, {
        inputQueryPredictions: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        } & {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        })[];
    }>>;
    bookmarkedPredictionImages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        predictionImageId: z.ZodString;
        userId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        predictionImageId: string;
    }, {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        predictionImageId: string;
    }>, "many">;
    dislikedPredictionImages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        predictionImageId: z.ZodString;
        userId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        predictionImageId: string;
    }, {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        predictionImageId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    prediction: {
        input: JsonValue;
        output: JsonValue;
        status: Status;
        error: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        model: string;
        startedAt: Date | null;
        completedAt: Date | null;
        replicateId: string | null;
    } & {
        inputQueryPredictions: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        } & {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        })[];
    };
    bookmarkedPredictionImages: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        predictionImageId: string;
    }[];
    dislikedPredictionImages: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        predictionImageId: string;
    }[];
}, {
    prediction: {
        input: JsonValue;
        output: JsonValue;
        status: Status;
        error: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        model: string;
        startedAt: Date | null;
        completedAt: Date | null;
        replicateId: string | null;
    } & {
        inputQueryPredictions: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        } & {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        })[];
    };
    bookmarkedPredictionImages: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        predictionImageId: string;
    }[];
    dislikedPredictionImages: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        predictionImageId: string;
    }[];
}>>;
export declare const loggedOutPredictionImageSchema: z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    urlOriginal: z.ZodString;
    urlHosted: z.ZodNullable<z.ZodString>;
    urlHostedStatus: z.ZodNativeEnum<typeof Status>;
    urlUpscaled4x: z.ZodNullable<z.ZodString>;
    urlUpscaled4xStatus: z.ZodNativeEnum<typeof Status>;
    isDeleted: z.ZodBoolean;
    isFeatured: z.ZodBoolean;
    predictionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    urlOriginal: string;
    urlHosted: string | null;
    urlHostedStatus: Status;
    urlUpscaled4x: string | null;
    urlUpscaled4xStatus: Status;
    isDeleted: boolean;
    isFeatured: boolean;
    predictionId: string;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    urlOriginal: string;
    urlHosted: string | null;
    urlHostedStatus: Status;
    urlUpscaled4x: string | null;
    urlUpscaled4xStatus: Status;
    isDeleted: boolean;
    isFeatured: boolean;
    predictionId: string;
}>, z.ZodObject<{
    prediction: z.ZodIntersection<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        status: z.ZodNativeEnum<typeof Status>;
        error: z.ZodNullable<z.ZodString>;
        model: z.ZodString;
        input: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
        output: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
        startedAt: z.ZodNullable<z.ZodDate>;
        completedAt: z.ZodNullable<z.ZodDate>;
        replicateId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        input: JsonValue;
        output: JsonValue;
        status: Status;
        error: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        model: string;
        startedAt: Date | null;
        completedAt: Date | null;
        replicateId: string | null;
    }, {
        input: JsonValue;
        output: JsonValue;
        status: Status;
        error: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        model: string;
        startedAt: Date | null;
        completedAt: Date | null;
        replicateId: string | null;
    }>, z.ZodObject<{
        inputQueryPredictions: z.ZodArray<z.ZodIntersection<z.ZodObject<{
            id: z.ZodString;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
            inputQueryId: z.ZodString;
            predictionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        }, {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        }>, z.ZodObject<{
            inputQuery: z.ZodObject<{
                id: z.ZodString;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                userId: z.ZodString;
                prevInputQueryId: z.ZodNullable<z.ZodString>;
                parentPredictionImageId: z.ZodNullable<z.ZodString>;
                inputText: z.ZodString;
                inputStyle: z.ZodNullable<z.ZodString>;
                inputImage: z.ZodNullable<z.ZodString>;
                inputSeed: z.ZodNumber;
                trainedEntityId: z.ZodNullable<z.ZodString>;
                numVariations: z.ZodNumber;
                visibility: z.ZodNativeEnum<typeof Visibility>;
                didSendImagePredictionRequests: z.ZodBoolean;
                metadata: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            }, {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            }>;
        }, "strip", z.ZodTypeAny, {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        }, {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        }>>, "many">;
    }, "strip", z.ZodTypeAny, {
        inputQueryPredictions: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        } & {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        })[];
    }, {
        inputQueryPredictions: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        } & {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        })[];
    }>>;
}, "strip", z.ZodTypeAny, {
    prediction: {
        input: JsonValue;
        output: JsonValue;
        status: Status;
        error: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        model: string;
        startedAt: Date | null;
        completedAt: Date | null;
        replicateId: string | null;
    } & {
        inputQueryPredictions: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        } & {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        })[];
    };
}, {
    prediction: {
        input: JsonValue;
        output: JsonValue;
        status: Status;
        error: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        model: string;
        startedAt: Date | null;
        completedAt: Date | null;
        replicateId: string | null;
    } & {
        inputQueryPredictions: ({
            id: string;
            createdAt: Date;
            updatedAt: Date;
            predictionId: string;
            inputQueryId: string;
        } & {
            inputQuery: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                prevInputQueryId: string | null;
                parentPredictionImageId: string | null;
                inputText: string;
                inputStyle: string | null;
                inputImage: string | null;
                inputSeed: number;
                trainedEntityId: string | null;
                numVariations: number;
                visibility: Visibility;
                didSendImagePredictionRequests: boolean;
                metadata: JsonValue;
            };
        })[];
    };
}>>;
export declare const userLoggedInDataSchema: z.ZodIntersection<z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    role: z.ZodNativeEnum<typeof GlobalRole>;
    isEmailVerified: z.ZodBoolean;
    didAgreeToTOS: z.ZodBoolean;
    doAutoTrainEntities: z.ZodBoolean;
    userPrivilegedId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role: GlobalRole;
    isEmailVerified: boolean;
    didAgreeToTOS: boolean;
    doAutoTrainEntities: boolean;
    userPrivilegedId: string;
}, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    role: GlobalRole;
    isEmailVerified: boolean;
    didAgreeToTOS: boolean;
    doAutoTrainEntities: boolean;
    userPrivilegedId: string;
}>, z.ZodObject<{
    userPrivileged: z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        email: z.ZodNullable<z.ZodString>;
        emailVerificationToken: z.ZodNullable<z.ZodString>;
        nonce: z.ZodNullable<z.ZodString>;
        subscriptionPlan: z.ZodNullable<z.ZodString>;
        subscriptionPlanStatus: z.ZodNativeEnum<typeof SubscriptionPlanStatus>;
        stripeCustomerId: z.ZodNullable<z.ZodString>;
        numGeneratedImagesRemaining: z.ZodNumber;
        numHighResDownloadsRemaining: z.ZodNumber;
        numMaxAvatarsAllowed: z.ZodNumber;
        stripeBillingErrorMessage: z.ZodNullable<z.ZodString>;
        hasEverPaid: z.ZodBoolean;
        isUnsubscribedFromEmails: z.ZodBoolean;
        intercomUserHash: z.ZodNullable<z.ZodString>;
        apiKey: z.ZodString;
        inviteCode: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        apiKey: string;
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
        inviteCode: string | null;
    }, {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        apiKey: string;
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
        inviteCode: string | null;
    }>;
    trainedEntities: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        userId: z.ZodString;
        status: z.ZodNativeEnum<typeof Status>;
        replicateTrainingId: z.ZodNullable<z.ZodString>;
        replicateModelVersionId: z.ZodNullable<z.ZodString>;
        replicateModelName: z.ZodString;
        replicateAccountName: z.ZodString;
        identifierToken: z.ZodString;
        classNoun: z.ZodString;
        displayName: z.ZodString;
        thumbnailUrl: z.ZodString;
        trainingDataZipUrl: z.ZodString;
        input: z.ZodType<JsonValue, z.ZodTypeDef, JsonValue>;
    }, "strip", z.ZodTypeAny, {
        input: JsonValue;
        status: Status;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        replicateTrainingId: string | null;
        replicateModelVersionId: string | null;
        replicateModelName: string;
        replicateAccountName: string;
        identifierToken: string;
        classNoun: string;
        displayName: string;
        thumbnailUrl: string;
        trainingDataZipUrl: string;
    }, {
        input: JsonValue;
        status: Status;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        replicateTrainingId: string | null;
        replicateModelVersionId: string | null;
        replicateModelName: string;
        replicateAccountName: string;
        identifierToken: string;
        classNoun: string;
        displayName: string;
        thumbnailUrl: string;
        trainingDataZipUrl: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    userPrivileged: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        apiKey: string;
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
        inviteCode: string | null;
    };
    trainedEntities: {
        input: JsonValue;
        status: Status;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        replicateTrainingId: string | null;
        replicateModelVersionId: string | null;
        replicateModelName: string;
        replicateAccountName: string;
        identifierToken: string;
        classNoun: string;
        displayName: string;
        thumbnailUrl: string;
        trainingDataZipUrl: string;
    }[];
}, {
    userPrivileged: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        apiKey: string;
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
        inviteCode: string | null;
    };
    trainedEntities: {
        input: JsonValue;
        status: Status;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        replicateTrainingId: string | null;
        replicateModelVersionId: string | null;
        replicateModelName: string;
        replicateAccountName: string;
        identifierToken: string;
        classNoun: string;
        displayName: string;
        thumbnailUrl: string;
        trainingDataZipUrl: string;
    }[];
}>>;
