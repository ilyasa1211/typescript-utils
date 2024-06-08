import { readdirSync } from "node:fs";
import path from "node:path";

export default function readDirectoryRecursive(directory: string) {
  const files: string[] = readdirSync(directory, { withFileTypes: true }).flatMap(
    (file) => {
      const fullpath = "." + path.posix.sep + path.join(directory, file.name);
      return file.isDirectory() ? readDirectoryRecursive(fullpath) : fullpath;
    }
  );
  return files;
}