export interface LoginCredentials {
  password: string
  username: string
}

export interface UserCredentials {
  username: string
  userId: string
}

export interface Gallery {
  pictures: string[]
}

export interface State {
  user: UserCredentials|undefined
  gallery: Gallery|undefined
}

export const initialState: State = {
  user: undefined,
  gallery: undefined
}
