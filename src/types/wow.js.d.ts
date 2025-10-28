declare module 'wow.js' {
  interface WOWOptions {
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
    live?: boolean;
    scrollContainer?: string | null;
    resetAnimation?: boolean;
    callback?: (box: any) => void;
  }

  export default class WOW {
    constructor(options?: WOWOptions);
    init(): void;
    sync(): void;
  }
}
