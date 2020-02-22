import axios from 'axios';

interface GroupsIOLoginApiKey {
  api_key: string;
}

interface GroupsIOLoginUser {
  email: string;
  password: string;
  twofactor?: number;
}

type GroupIOLogin = GroupsIOLoginApiKey | GroupsIOLoginUser;

export class GroupsIO {
  private apiKey = null;
  private email = '';
  private apiToken: GroupIOLogin = null;
  readonly DEFAULT_HOSTNAME = 'api.groups.io';
  readonly DEFAULT_SCHEME = 'https';
  readonly DEFAULT_API_BASE = this.DEFAULT_SCHEME + '://' + this.DEFAULT_HOSTNAME;
  readonly DEFAULT_VERSION = 'v1';
  readonly DEFAULT_VERSIONED_API_BASE = this.DEFAULT_API_BASE + '/' + this.DEFAULT_VERSION + '/';

  IsLoggedIn() {
    return this.apiKey != null;
  }

  async Login(login: GroupIOLogin): Promise<boolean> {
    // try to login with this authentication method
    return false;
  }
}
