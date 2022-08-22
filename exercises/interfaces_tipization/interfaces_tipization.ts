interface IPayment {
    sum: number
    from: number
    to: number
}

interface ISuccessResponseData extends IPayment {
    databaseId: number
}

interface IFailResponseData {
    errorMessage: string,
    errorCode: number
}

enum ResponseStatus {
	Success = "success",
	Fail = "fail"
}

interface ISuccessPaymentResponse {
    status: ResponseStatus.Success
    data: ISuccessResponseData
}

interface IFailPaymentResponse {
    status: ResponseStatus.Fail
    data: IFailResponseData
}

type Res = ISuccessPaymentResponse | IFailPaymentResponse;

function isSuccessResponse(response: Res): response is ISuccessPaymentResponse {
	return response.status === ResponseStatus.Success;
}

function getSuccessRespDataBase(response: Res): number {
	if (isSuccessResponse(response)) {
		return response.data.databaseId;
	} else {
		throw new Error(response.data.errorMessage);
	}
}