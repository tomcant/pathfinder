export default class CompoundMap<K, V> {
  private keys: Map<string, K>;
  private values: Map<string, V>;

  constructor(initial: [K, V][] = []) {
    this.keys = new Map(initial.map(([key]) => [this.toKey(key), key]));
    this.values = new Map(initial.map(([key, value]) => [this.toKey(key), value]));
  }

  has(key: K): boolean {
    return this.keys.has(this.toKey(key));
  }

  get(key: K): V | undefined {
    return this.values.get(this.toKey(key));
  }

  set(key: K, value: V): this {
    const toKey = this.toKey(key);
    this.keys.set(toKey, key);
    this.values.set(toKey, value);
    return this;
  }

  delete(key: K): boolean {
    const toKey = this.toKey(key);
    this.keys.delete(toKey);
    return this.values.delete(toKey);
  }

  *[Symbol.iterator](): IterableIterator<[K, V]> {
    for (const [, key] of this.keys.entries()) {
      yield [key, this.get(key) as V];
    }
  }

  private toKey(key: K): string {
    return JSON.stringify(key);
  }
}
