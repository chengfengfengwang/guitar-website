class HttpException extends Error{
    constructor(errorCode=10000,errorMsg="出错了",statusCode=400){
        super();
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
        this.statusCode = statusCode
    }
}
module.exports = {
    HttpException
}