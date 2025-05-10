// strategy.d.ts
/// <reference path="./profile.d.ts" /> // If Profile is a global or in a separate file

import { Profile } from './profile'; // If Profile is exported from profile.d.ts

declare class Strategy {
  constructor(options: any, verify: (profile: Profile, done: (error: any, user?: any) => void) => void);
  // ... other methods and properties of your Strategy class
}

export = Strategy;
