export const cdnBase = "https://develmts.github.io/dev-cdn/projects";

function cdnUrl(project: string, path: string) {
  return `${cdnBase}/${project}/${path.replace(/^\/+/, "")}`;
}

const currProject = "neptune"

export const cdn = (path: string) => {
  return cdnUrl(currProject, path);
}
  
