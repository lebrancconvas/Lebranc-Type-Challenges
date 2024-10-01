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

// Readonly<Type>: Making all properties of Type readonly. (Opposite of Mutable<Type>)
type ExampleReadonly = Readonly<{title: string, view: number}>

type CustomReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Record<Keys, Type>: Making an object type whose property keys are Keys and whose property values are Type.
type ExampleRecord = Record<'title', string>;

type CustomRecord<K extends keyof any, T> = {
    [P in K]: T;
};

// Pick<Type, Keys>: Making an object type by picking the set of properties Keys from Type.
type ExamplePick = Pick<{title: string, view: number}, 'title'>;

type CustomPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// Omit<Type, Keys>: Making an object type by picking all properties from Type and then removing Keys.
type ExampleOmit = Omit<{title: string, view: number}, 'view'>;

type CustomOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Exclude<UnionType, ExcludedMembers>: Exclude from UnionType those types that are assignable to ExcludedMembers.
type ExampleExclude = Exclude<'title' | 'view' | 'comment', 'view' | 'comment'>;

type CustomExclude<T, U> = T extends U ? never : T;

// Extract<Type, Union>: Extract from Union those types that are assignable to Type.
type ExampleExtract = Extract<'Title' | 'View', 'View' | 'Comment'>;

type CustomExtract<T, U> = T extends U ? T : never;

// NonNullable<Type>: Exclude null and undefined from Type.
type ExampleNonNullable = NonNullable<string | number | undefined | null | [null] | [string, number]>;

type CustomNonNullable<T> = T & {};

// Parameters<Type>: Obtain the parameters of a function type in a tuple.
type ExampleParameters = Parameters<(user: string) => {name: string, level: number}>;

type CustomParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// ConstructorParameters<Type>: Obtain the parameters of a constructor function type in a tuple.
type ExampleConstructorParameters = ConstructorParameters<ErrorConstructor>;

type CustomConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

// ReturnType<Type>: Obtain the return type of a function type.
type ExampleReturnType = ReturnType<(user: string) => {name: string, level: number}>;

type CustomReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// InstanceType<Type>: Obtain the instance type of a constructor function type.
type ExampleInstanceType = InstanceType<RegExpConstructor>;

type CustomInstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

// NoInfer<Type>: Prevents inference of Type.
function createAngle<T extends number>(angles: T[], selectedAngle: NoInfer<T>) {console.log(selectedAngle)};
createAngle([30, 60, 90], 90);

type CustomNoInfer<T> = intrinsic;

// ThisParameterType<Type>: Obtain the `this` parameter type of a function type.
type ExampleThisParameterType = ThisParameterType<(this: string, haveSword: boolean) => {name: string, level: number}>;

type CustomThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;

// OmitThisParameter<Type>: Remove the `this` parameter in a function type.
type ExampleOmitThisParameter = OmitThisParameter<(this: string, haveSword: boolean) => {name: string, level: number}>;

type CustomOmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;

// ThisType<Type>: ThisType<Type> is a marker for contextual this types. (Need more clarifying).
type ExampleThisType = ThisType<{name: string} & {level: number}>;

interface CustomThisType<T> {};
