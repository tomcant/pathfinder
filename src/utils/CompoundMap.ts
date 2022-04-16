export default class CompoundMap<K, V> implements Map<K, V> {
  private readonly items: Map<string, { key: K; value: V }>;

  constructor(entries: [K, V][] = []) {
    this.items = new Map(
      entries.map(([key, value]) => [this.toKey(key), { key, value }])
    );
  }

  clear(): void {
    this.items.clear();
  }

  delete(key: K): boolean {
    return this.items.delete(this.toKey(key));
  }

  get(key: K): V | undefined {
    return this.items.get(this.toKey(key))?.value;
  }

  has(key: K): boolean {
    return this.items.has(this.toKey(key));
  }

  set(key: K, value: V): this {
    this.items.set(this.toKey(key), { key, value });
    return this;
  }

  *[Symbol.iterator](): IterableIterator<[K, V]> {
    for (const [, { key, value }] of this.items) {
      yield [key, value];
    }
  }

  *entries(): IterableIterator<[K, V]> {
    yield* this[Symbol.iterator]();
  }

  *keys(): IterableIterator<K> {
    for (const [, { key }] of this.items) {
      yield key;
    }
  }

  *values(): IterableIterator<V> {
    for (const [, { value }] of this.items) {
      yield value;
    }
  }

  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
    for (const [, { key, value }] of this.items) {
      callbackfn.call(thisArg, value, key, this);
    }
  }

  get size(): number {
    return this.items.size;
  }

  get [Symbol.toStringTag](): string {
    return this.constructor.name;
  }

  private toKey(key: K): string {
    return JSON.stringify(key);
  }
}
