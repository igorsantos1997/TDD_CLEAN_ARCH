import { FacebookAuthentication } from '@/domain/features'

class FacebookAuthenticationService {
  constructor (private readonly LoadFacebookUserApi: LoadFacebookUserApi) {}
  async execute (params: FacebookAuthentication.Params): Promise<void> {
    await this.LoadFacebookUserApi.loadUser(params)
  }
}

interface LoadFacebookUserApi {
  loadUser: (params: LoadFacebookUserApi.Params) => Promise<void>
}

class LoadFacebookUserApiSpy implements LoadFacebookUserApi {
  token?: string

  loadUser = async (params: LoadFacebookUserApi.Params): Promise<void> => {
    this.token = params.token
  }
}

namespace LoadFacebookUserApi{
  export type Params = {
    token: string
  }
}

describe('FacebookAuthenticationService', () => {
  it('should call LoadFacebookUserApi with correct params', async () => {
    const LoadFacebookUserApi = new LoadFacebookUserApiSpy()
    const sut = new FacebookAuthenticationService(LoadFacebookUserApi)

    await sut.execute({ token: 'any_token' })

    expect(LoadFacebookUserApi.token).toBe('any_token')
  })
})
