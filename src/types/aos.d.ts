declare module 'aos' {
  export interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    anchor?: string;
    anchorPlacement?: string;
    disable?: boolean | string;
    startEvent?: string;
    initClassName?: string;
    animatedClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
  }

  export interface AOS {
    init(options?: AosOptions): void;
    refresh(hard?: boolean): void;
    refreshHard(): void;
  }

  const aos: AOS;
  export default aos;
} 