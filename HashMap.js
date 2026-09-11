class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    const bucket = this.buckets[index];

    // Check if key already exists in this bucket -> update it
    for (const entry of bucket) {
      if (entry[0] === key) {
        entry[1] = value;
        return;
      }
    }

    // Otherwise, add a new entry
    bucket.push([key, value]);

    // Check if we need to grow
    if (this.length() > this.capacity * this.loadFactor) {
      this.grow();
    }
  }

    get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return null;

    for (const entry of bucket) {
      if (entry[0] === key) {
        return entry[1];
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (const entry of bucket) {
      if (entry[0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  length() {
    let count = 0;
    for (const bucket of this.buckets) {
      if (bucket) {
        count += bucket.length;
      }
    }
    return count;
  }

  grow() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity);

    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value); // re-hash and re-insert using new capacity
        }
      }
    }
  }
  
    clear() {
    this.buckets = new Array(this.capacity);
  }

  keys() {
    const keysArray = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [key] of bucket) {
          keysArray.push(key);
        }
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const [, value] of bucket) {
          valuesArray.push(value);
        }
      }
    }

    return valuesArray;
  }

  entries() {
    const entriesArray = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const entry of bucket) {
          entriesArray.push(entry);
        }
      }
    }

    return entriesArray;
  }
}

export default HashMap;
