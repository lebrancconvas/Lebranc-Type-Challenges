function swap<T1, T2>(value: T1): T2 {
  return value as unknown as T2;
}

const a = swap<'a', string>('a');

type A<T extends number> = (value: T) => infer T
