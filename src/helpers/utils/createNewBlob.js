export function createNewBlob(data) {
  if (!data) throw new Error("Initial data argument is not provided");

  const createBlob = new Blob([this.b64toBlob(data)]);
  return createBlob;
}
