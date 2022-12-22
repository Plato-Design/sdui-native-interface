/* 
https://github.com/fabien0102/ts-to-zod
*/

/* ======== UTILITY TYPES =========== */
export type JsonValue =
| string
| number
| boolean
| { [x: string]: JsonValue }
| Array<JsonValue>

/* ======== DATABASE TYPES ========== */

export enum GlobalRole {
  SUPERADMIN,
  CUSTOMER,
  UNKNOWN,
}

export type User = {
  id: string
  createdAt: Date
  updatedAt: Date
  role: GlobalRole
  isEmailVerified: boolean
  didAgreeToTOS: boolean
  doAutoTrainEntities: boolean
  userPrivilegedId: string
}

export type UserNativeSessionApiKey = {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  apiKey: string
  expiresAt: Date
  loggedOut: boolean
}

export enum SubscriptionPlanStatus {
  NO_SUBSCRIPTION,
  SUBSCRIBED,
  CANCELLED
}

export type UserPrivileged = {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string | null
  emailVerificationToken: string | null
  nonce: string | null
  subscriptionPlan: string | null
  subscriptionPlanStatus: SubscriptionPlanStatus
  stripeCustomerId: string | null
  numGeneratedImagesRemaining: number
  numHighResDownloadsRemaining: number
  numMaxAvatarsAllowed: number
  stripeBillingErrorMessage: string | null
  hasEverPaid: boolean
  isUnsubscribedFromEmails: boolean
  intercomUserHash: string | null
  apiKey: string
  inviteCode: string | null
}

export enum Status {
  idle,
  review,
  queued,
  pushing,
  starting,
  processing,
  succeeded,
  failed,
  cancelled,
  canceled,
}

export type TrainedEntity = {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  status: Status
  replicateTrainingId: string | null
  replicateModelVersionId: string | null
  replicateModelName: string
  replicateAccountName: string
  identifierToken: string
  classNoun: string
  displayName: string
  thumbnailUrl: string
  trainingDataZipUrl: string
  input: JsonValue
}

export type PredictionImage = {
  id: string
  createdAt: Date
  updatedAt: Date
  urlOriginal: string
  urlHosted: string | null
  urlHostedStatus: Status
  urlUpscaled4x: string | null
  urlUpscaled4xStatus: Status
  isDeleted: boolean
  isFeatured: boolean
  predictionId: string
}
export type Prediction = {
  id: string
  createdAt: Date
  updatedAt: Date
  status: Status
  error: string | null
  model: string
  input: JsonValue
  output: JsonValue
  startedAt: Date | null
  completedAt: Date | null
  replicateId: string | null
}
export type InputQueryPrediction = {
  id: string
  createdAt: Date
  updatedAt: Date
  inputQueryId: string
  predictionId: string
}

export enum Visibility {
  public,
  private
};

export type InputQuery = {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  prevInputQueryId: string | null
  parentPredictionImageId: string | null
  inputText: string
  inputStyle: string | null
  inputImage: string | null
  inputSeed: number
  trainedEntityId: string | null
  numVariations: number
  visibility: Visibility
  didSendImagePredictionRequests: boolean
  metadata: JsonValue
}
export type BookmarkedPredictionImage = {
  id: string
  createdAt: Date
  updatedAt: Date
  predictionImageId: string
  userId: string
}

export type DislikedPredictionImage = {
  id: string
  createdAt: Date
  updatedAt: Date
  predictionImageId: string
  userId: string
}

/* ========= INTERFACE TYPES ========== */

export type LoggedInUserPredictionImage = PredictionImage & {
  prediction: Prediction & {
      inputQueryPredictions: (InputQueryPrediction & {
          inputQuery: InputQuery
      })[];
  }
  bookmarkedPredictionImages: BookmarkedPredictionImage[]
  dislikedPredictionImages: DislikedPredictionImage[]
}

export type LoggedOutPredictionImage = PredictionImage & {
  prediction: Prediction & {
      inputQueryPredictions: (InputQueryPrediction & {
          inputQuery: InputQuery
      })[];
  }
}

export type UserLoggedInData = User & {
  userPrivileged: UserPrivileged
  trainedEntities: TrainedEntity[]
}