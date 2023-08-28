declare module 'cookie-cutter' {
    export function set(name: string, value: string, options?: object): void;
    export function get(name: string): string;
    export function deleteCookie(name: string): void;
}