"use strict";
/*
https://github.com/fabien0102/ts-to-zod
*/
exports.__esModule = true;
exports.Visibility = exports.Status = exports.SubscriptionPlanStatus = exports.GlobalRole = void 0;
/* ======== DATABASE TYPES ========== */
var GlobalRole;
(function (GlobalRole) {
    GlobalRole[GlobalRole["SUPERADMIN"] = 0] = "SUPERADMIN";
    GlobalRole[GlobalRole["CUSTOMER"] = 1] = "CUSTOMER";
    GlobalRole[GlobalRole["UNKNOWN"] = 2] = "UNKNOWN";
})(GlobalRole = exports.GlobalRole || (exports.GlobalRole = {}));
var SubscriptionPlanStatus;
(function (SubscriptionPlanStatus) {
    SubscriptionPlanStatus[SubscriptionPlanStatus["NO_SUBSCRIPTION"] = 0] = "NO_SUBSCRIPTION";
    SubscriptionPlanStatus[SubscriptionPlanStatus["SUBSCRIBED"] = 1] = "SUBSCRIBED";
    SubscriptionPlanStatus[SubscriptionPlanStatus["CANCELLED"] = 2] = "CANCELLED";
})(SubscriptionPlanStatus = exports.SubscriptionPlanStatus || (exports.SubscriptionPlanStatus = {}));
var Status;
(function (Status) {
    Status[Status["idle"] = 0] = "idle";
    Status[Status["review"] = 1] = "review";
    Status[Status["queued"] = 2] = "queued";
    Status[Status["pushing"] = 3] = "pushing";
    Status[Status["starting"] = 4] = "starting";
    Status[Status["processing"] = 5] = "processing";
    Status[Status["succeeded"] = 6] = "succeeded";
    Status[Status["failed"] = 7] = "failed";
    Status[Status["cancelled"] = 8] = "cancelled";
    Status[Status["canceled"] = 9] = "canceled";
})(Status = exports.Status || (exports.Status = {}));
var Visibility;
(function (Visibility) {
    Visibility[Visibility["public"] = 0] = "public";
    Visibility[Visibility["private"] = 1] = "private";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
;
