import { Document } from "mongoose"

export interface Patience extends Document{
  readonly firstName: string,
  readonly lastName: string,
  readonly age: number,
  readonly patology?: string,
  readonly cretedAd?: Date
}