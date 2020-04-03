// Type definitiosn for the things we need from dbf-lib

declare module "dbf-lib" {
  export module util {
    export function findLowerBound(target: number, array: Array<number>): number;
  }
}
