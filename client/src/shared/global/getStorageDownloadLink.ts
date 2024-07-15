/**
 * percent sign (%) is replaced with %25 (which is the URL-encoded version of %)
 * and any forward slash (/) is replaced with %2F (which is the URL-encoded version of /)
 */
const getUrlEncoded = (input: string) => {
  return input.replace(/%/g, "%25").replace(/\//g, "%2F");
};

export default function getStorageDownloadLink(path?: string): string {
  if (!path) {
    return "";
  }

  const encodedPath = getUrlEncoded(path);
  const bucketURL = process.env.NEXT_PUBLIC_STORAGE_BUCKET || "";
  const bucket = getUrlEncoded(bucketURL);

  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodedPath}?alt=media`;
}
