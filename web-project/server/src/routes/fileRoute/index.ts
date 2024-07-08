import path from "path";
import { existsSync } from "fs";
import express, { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
const router = express.Router();

router.get("/:filename", async (req: Request, res: Response) => {
  const resFile = path.resolve(`./static/files/${req.params.filename}`);

  if (existsSync(resFile)) {
    return res.sendFile(resFile);
  }
  res.status(400).send("فایل موجود نمی باشد!");
});

router.post("/uploadFile", (req: Request, res: Response) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const file = req.files.fileName as UploadedFile;

    const newFilename = file.name;
    const dir = path.resolve("./static/files");
    const pathDir = path.join(dir, newFilename);

    file.mv(pathDir, (err: any) => {
      if (err) return res.status(500).send(err);

      return res.send("file uploaded");
    });
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});

// router.post("/uploadTestFile", (req, res) => {
//   try {
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return res.status(400).send("No files were uploaded.");
//     }

//     const file = req.files?.avatarFileName as UploadedFile;

//     uploadFile(file, res);
//   } catch (e: any) {
//     res.status(400).send(e.msessage);
//   }
// });

// router.post("/uploadFile", (req: Request, res: Response) => {
//   try {
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return res.status(400).send("No files were uploaded.");
//     }

//     const file = req.files.fileName as UploadedFile;

//     //const uFilename = path.parse(file.name);
//     const newFilename = file.name; //`${Date.now().toString()}${uFilename.ext}`;
//     //const uid = Date.now().toString();
//     const dir = path.resolve("./static/files");
//     const pathDir = path.join(dir, newFilename);
//     //const url = `http://localhost:3000/file/${newFilename}`;

//     file.mv(pathDir, (err: any) => {
//       if (err) return res.status(500).send(err);

//       //return res.send({ uid, name: newFilename, type: file.mimetype, url });
//       return res.send("file uploaded");
//     });
//   } catch (e: any) {
//     res.status(400).send(e.message);
//   }
// });

export default router;
