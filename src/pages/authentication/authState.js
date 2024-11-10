export class AuthState {
    static Unknown = new AuthState('unknown');
    static Host = new AuthState('host');
    static Login = new AuthState('login');
  
    constructor(name) {
      this.name = name;
    }
  }