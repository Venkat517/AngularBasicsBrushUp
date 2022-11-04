import { ErrorHandler } from '@angular/core'

export class MyExceptionHandler implements ErrorHandler {
  handleError(error: any, stackTrace = null, reason = null) {
    console.log('ErrorHandler Successfull');
    console.log(error, stackTrace);
  }
}
