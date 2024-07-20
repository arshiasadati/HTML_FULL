import { existsSync, mkdirSync } from "fs";
import path from "path";
import { UploadedFile } from "express-fileupload";
import { Request, Response } from "express";

export const uploadFile = (file: UploadedFile, res: Response) => {
  const uFilename = path.parse(file.name);
  const newFilename = `$${Date.now().toString()}${uFilename.ext}`;
  const uid = Date.now().toString();
  const dir = path.resolve("./static/files");
  const pathDir = path.join(dir, newFilename);
  const url = `http://localhost:3000/file/${newFilename}`;

  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  file.mv(pathDir, function (err: any) {
    if (err) return res.status(500).send(err);

    return res.send({ uid, name: newFilename, type: file.mimetype, url });
  });
};
