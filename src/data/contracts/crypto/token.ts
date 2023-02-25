export interface TokenGenerator {
  generateToken: (params: TokenGenerator.params) => Promise<void>
}

export namespace TokenGenerator {
  export type params = {
    key: string
    expirationInMs: number
  }
}
