export type CreateUserType = {
  roleId?: number
  accountType: string
  firstName?: string
  lastName?: string
  email: string
  password: string
  phoneNumber: number
}


export type UserInput = {
  roleId?: number
  firstName?: string
  lastName?: string
  email: string
  phoneNumber?: number
  otherPhoneNumber?: number
  password?: string
  address?: string
  dob?: Date
  profileImage?: string
  referralCode?: string
  referredBy?: string
  totalReferred?: number
  regSource: string
  loyaltyPoints?: number
  isVerified?: boolean
  documentVerified?: boolean
  documentType?: number
  isFirstTimeUser?: boolean
  accountType: string
  status: string
  token?: string
  tokenExpire?: Date
}