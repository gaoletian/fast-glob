export function flatten<T>(items: T[][]): T[] {
	return items.reduce((collection, item) => ([] as T[]).concat(collection, item), [] as T[]);
}

export function splitWhen<T>(items: T[], predicate: (item: T) => boolean): T[][] {
	const result: T[][] = [[]];

	let groupIndex = 0;

	for (const item of items) {
		if (predicate(item)) {
			groupIndex++;
			result[groupIndex] = [];
		} else {
			result[groupIndex].push(item);
		}
	}

	return result;
}
