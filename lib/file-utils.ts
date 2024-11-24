import path from "path";
import fs from "fs";
import { init } from "@paralleldrive/cuid2";

const createId = init({ length: 10 });

export function getUploadPath({ file, dir }: { file: File; dir: string }) {
  const randomString = createId();
  const originalName = path.parse(file.name).name;
  const fileExt = path.extname(file.name);
  const newFileName = `${originalName}_${randomString}${fileExt}`;
  const relativePath = dir + newFileName;
  return relativePath;
}

export async function uploadFile({
  file,
  uploadPath,
}: {
  file: File;
  uploadPath: string;
}) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const resolvedPath = path.join(process.cwd(), "public", uploadPath);
  const dir = path.dirname(resolvedPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(resolvedPath, buffer);
}
