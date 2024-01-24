//* Custom classes
//  ErrorConstructor to throw errors into catch with a message.
interface CustomError {
  // details: string
  status: number
  name: string
  error: string
}


class CustomError extends Error {
  constructor(message: string) {
    super(message)
    // this.details = details
  }
}


export class UnprocessableEntity extends CustomError {
  constructor(message: string) {
    super(message)
    this.name = 'UnprocessableEntity'
    this.status = 422
  }
}


export class NotFound extends CustomError {
  constructor(message: string) {
    super(message)
    this.name = 'NotFound'
    this.status = 404
  }
}


export class BadRequest extends CustomError {
  constructor(message: string) {
    super(message)
    this.name = 'BadRequest'
    this.status = 400
  }
}


export class Conflict extends CustomError {
  constructor(message: string) {
    super(message)
    this.name = 'Conflict'
    this.status = 409
  }
}


export class Unauthorized extends CustomError {
  constructor(message: string) {
    super(message)
    this.name = 'Unauthorized'
    this.status = 401
    this.error = 'Unauthorized'
  }
}

export  { CustomError } 