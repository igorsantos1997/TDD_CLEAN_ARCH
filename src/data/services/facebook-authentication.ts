import { LoadFacebookUserApi } from '@/data/contracts/apis'
import { FacebookAuthentication } from '@/domain/features'
import { AuthenticationError } from '@/domain/errors'

export class FacebookAuthenticationService {
  constructor (private readonly LoadFacebookUserApi: LoadFacebookUserApi) {}
  async execute (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    await this.LoadFacebookUserApi.loadUser(params)
    return new AuthenticationError()
  }
}
