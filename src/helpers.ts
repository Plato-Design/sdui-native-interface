export function safeJsonParse<T>(data: string): T | null {
  try {
    return JSON.parse(data) as T
  } catch (exception) {
    return null
  }
}
