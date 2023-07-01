export default function loadBalancer(chinaDownload, USDownload) {
  // Return a new promise that settles with the outcome of the first resolving/rejecting promise
  return Promise.race([chinaDownload, USDownload]);
}
