export default class Queue<T> {
  constructor(private items: T[] = []) {}

  public enqueue(...items: T[]): void {
    this.items.push(...items);
  }

  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Cannot dequeue empty queue");
    }

    return this.items.shift() as T;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public get size(): number {
    return this.items.length;
  }
}
