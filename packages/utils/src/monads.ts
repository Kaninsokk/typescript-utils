export const tap = <A>(fn: (a: A) => void) => {
    return (a: A): A => {
        fn(a)
        return a
    }
}
