class HttpException extends Error{
    constructor(errorMsg="出错了",errorCode=10000,statusCode=400){
        super();
        this.errorMsg = errorMsg;
        this.errorCode = errorCode;
        this.statusCode = statusCode
    }
}
module.exports = {
    HttpException
}