import { Injectable } from '@angular/core';
import { AuthStrategy } from './auth.strategy';

@Injectable()
export class FirebaseService implements AuthStrategy {
  login(username: string, password: string) {
    return `Logged to FIREBASE with ${username} and ${password}`;
  }
}
