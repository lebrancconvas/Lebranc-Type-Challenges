// Utility Type: https://www.typescriptlang.org/docs/handbook/utility-types.html

// Awaited<Type>: Making Type for Promise Resolved Value.
type ExampleAwaited = Awaited<Promise<String>>;

type CustomAwaited<T> = T extends null | undefined ? T : // special case for `null | undefined` when not in `--strictNullChecks` mode
    T extends object & { then(onfulfilled: infer F, ...args: infer _): any; } ? // `await` only unwraps object types with a callable `then`. Non-object types are not unwrapped
        F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to `then` is callable, extracts the first argument
            Awaited<V> : // recursively unwrap the value
        never : // the argument to `then` was not callable
    T; // non-object or non-thenable


// Partial<Type>: Making all properties of Type optional. (Opposite of Required<Type>)
type ExamplePartial = Partial<{title: string, view?: number}>;

type CustomPartial<T> = {
    [P in keyof T]?: T[P];
};

// Required<Type>: Making all properties of Type required. (Opposite of Partial<Type>)
type ExampleRequired = Required<{title: string, view?: number}>

type CustomRequired<T> = {
    [P in keyof T]-?: T[P];
};

