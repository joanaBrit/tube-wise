export type ServerResponse = ErrorResponse | RegisterUserResponse

export type ErrorResponse = {
  error?: string
}

export type RegisterUserResponse = {
  user: string
}

export type LoginResponse = {
  token: string,
  doNotNavigate?: boolean
}