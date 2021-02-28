import { Injectable } from '@angular/core';
import { AuthStrategy } from './auth.strategy';

@Injectable()
export class FacebookService implements AuthStrategy {
  login(username: string, password: string) {
    return `Logged to FACEBOOK with ${username} and ${password}`;
  }
}
