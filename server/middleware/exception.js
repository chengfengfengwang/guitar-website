const HttpException = require('./../lib/exception')
const catchError = async (ctx,next)=>{
    try {
        await next()
    } catch (error) {
        if(error.errorCode){
            ctx.body={
                error_code:error.errorCode,
                msg:error.errorMsg,
                request_url:error.requestUrl
            }
            ctx.status = error.statusCode;
        }else{
            console.log(error)
            ctx.body={
                code:500,
                msg:'出错了'
            }
            ctx.status = 500;
        }
        
    }
    
}
module.exports = catchError;