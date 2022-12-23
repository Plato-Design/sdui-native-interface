// Generated by ts-to-zod
import { z } from "zod";
import {
  JsonValue,
  GlobalRole,
  SubscriptionPlanStatus,
  Status,
  Visibility,
} from "./types";

export const jsonValueSchema: z.ZodSchema<JsonValue> = z.lazy(() =>
  z
    .union([
      z.string(),
      z.number(),
      z.boolean(),
      z.record(jsonValueSchema),
      z.array(jsonValueSchema),
    ])
    .nullable()
);

export const globalRoleSchema = z.nativeEnum(GlobalRole);

export const userSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  role: globalRoleSchema,
  isEmailVerified: z.boolean(),
  didAgreeToTOS: z.boolean(),
  userPrivilegedId: z.string(),
});

export const userNativeSessionApiKeySchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  apiKey: z.string(),
  expiresAt: z.date(),
  loggedOut: z.boolean(),
});

export const subscriptionPlanStatusSchema = z.nativeEnum(
  SubscriptionPlanStatus
);

export const userPrivilegedSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  email: z.string().nullable(),
  emailVerificationToken: z.string().nullable(),
  nonce: z.string().nullable(),
  subscriptionPlan: z.string().nullable(),
  subscriptionPlanStatus: subscriptionPlanStatusSchema,
  stripeCustomerId: z.string().nullable(),
  numGeneratedImagesRemaining: z.number(),
  numHighResDownloadsRemaining: z.number(),
  numMaxAvatarsAllowed: z.number(),
  stripeBillingErrorMessage: z.string().nullable(),
  hasEverPaid: z.boolean(),
  isUnsubscribedFromEmails: z.boolean(),
  intercomUserHash: z.string().nullable(),
  apiKey: z.string(),
  inviteCode: z.string().nullable(),
});

export const statusSchema = z.nativeEnum(Status);

export const trainedEntitySchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  status: statusSchema,
  replicateTrainingId: z.string().nullable(),
  replicateModelVersionId: z.string().nullable(),
  replicateModelName: z.string(),
  replicateAccountName: z.string(),
  identifierToken: z.string(),
  classNoun: z.string(),
  displayName: z.string(),
  thumbnailUrl: z.string(),
  trainingDataZipUrl: z.string(),
  input: jsonValueSchema,
});

export const predictionImageSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  urlOriginal: z.string(),
  urlHosted: z.string().nullable(),
  urlHostedStatus: statusSchema,
  urlUpscaled4x: z.string().nullable(),
  urlUpscaled4xStatus: statusSchema,
  isDeleted: z.boolean(),
  isFeatured: z.boolean(),
  predictionId: z.string(),
});

export const predictionSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: statusSchema,
  error: z.string().nullable(),
  model: z.string(),
  input: jsonValueSchema,
  output: jsonValueSchema,
  startedAt: z.date().nullable(),
  completedAt: z.date().nullable(),
  replicateId: z.string().nullable(),
});

export const inputQueryPredictionSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  inputQueryId: z.string(),
  predictionId: z.string(),
});

export const visibilitySchema = z.nativeEnum(Visibility);

export const inputQuerySchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  prevInputQueryId: z.string().nullable(),
  parentPredictionImageId: z.string().nullable(),
  inputText: z.string(),
  inputStyle: z.string().nullable(),
  inputImage: z.string().nullable(),
  inputSeed: z.number(),
  trainedEntityId: z.string().nullable(),
  numVariations: z.number(),
  visibility: visibilitySchema,
  didSendImagePredictionRequests: z.boolean(),
  metadata: jsonValueSchema,
});

export const bookmarkedPredictionImageSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  predictionImageId: z.string(),
  userId: z.string(),
});

export const dislikedPredictionImageSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  predictionImageId: z.string(),
  userId: z.string(),
});

export const loggedInUserPredictionImageSchema = predictionImageSchema.and(
  z.object({
    prediction: predictionSchema.and(
      z.object({
        inputQueryPredictions: z.array(
          inputQueryPredictionSchema.and(
            z.object({
              inputQuery: inputQuerySchema,
            })
          )
        ),
      })
    ),
    bookmarkedPredictionImages: z.array(bookmarkedPredictionImageSchema),
    dislikedPredictionImages: z.array(dislikedPredictionImageSchema),
  })
);

export const loggedOutPredictionImageSchema = predictionImageSchema.and(
  z.object({
    prediction: predictionSchema.and(
      z.object({
        inputQueryPredictions: z.array(
          inputQueryPredictionSchema.and(
            z.object({
              inputQuery: inputQuerySchema,
            })
          )
        ),
      })
    ),
  })
);

export const userLoggedInDataSchema = userSchema.and(
  z.object({
    userPrivileged: userPrivilegedSchema,
    trainedEntities: z.array(trainedEntitySchema),
  })
);
