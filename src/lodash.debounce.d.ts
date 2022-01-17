declare module 'lodash.debounce' {
  export interface Options {
    leading?: boolean,
    maxWait?: number,
    trailing?: boolean
  }

  export function debounce(func: Function, wait?: number, options?: Options): void
}
