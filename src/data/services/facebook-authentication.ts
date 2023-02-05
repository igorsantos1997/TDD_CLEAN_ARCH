import { LoadFacebookUserApi } from '@/data/contracts/apis'
import { FacebookAuthentication } from '@/domain/features'
import { AuthenticationError } from '@/domain/errors'
import { LoadUserAccountRepository } from '../contracts/repositories'

export class FacebookAuthenticationService {
  constructor (
    private readonly LoadFacebookUserApi: LoadFacebookUserApi,
    private readonly LoadUserAccountRepo: LoadUserAccountRepository
  ) { }

  async execute (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    const fbData = await this.LoadFacebookUserApi.loadUser(params)
    if (fbData !== undefined) await this.LoadUserAccountRepo.load({ email: fbData.email })
    return new AuthenticationError()
  }
}
