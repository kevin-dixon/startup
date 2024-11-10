export class AuthState {
    static Unknown = new AuthState('unknown');
    static Host = new AuthState('host');
    static Login = new AuthState('login');
  
    constructor(name) {
      this.name = name;
    }

    toString() {
      return this.name;
    }

    equals(other) {
      return other instanceof AuthState && this.name === other.name;
    }
  }