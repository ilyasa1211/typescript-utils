export const objectToQuery = (object: Record<string, any>) => new URLSearchParams(object).toString()
