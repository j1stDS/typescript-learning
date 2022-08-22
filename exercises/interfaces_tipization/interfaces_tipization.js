"use strict";
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus["Success"] = "success";
    ResponseStatus["Fail"] = "fail";
})(ResponseStatus || (ResponseStatus = {}));
function isSuccessResponse(response) {
    return response.status === ResponseStatus.Success;
}
function getSuccessRespDataBase(response) {
    if (isSuccessResponse(response)) {
        return response.data.databaseId;
    }
    else {
        throw new Error(response.data.errorMessage);
    }
}
