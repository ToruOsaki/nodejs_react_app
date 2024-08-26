/* server.ts */

import express from "express";

const app: express.Express = express();
const port = process.env.PORT || 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, Node.js!!!");
});

app.get("/api", (req: express.Request, res: express.Response) => {
    res.json([
      {
        id:1,
        name:"りんごです",
        price:200,
        image:"https://t3.ftcdn.net/jpg/01/44/72/68/240_F_144726846_a6aI8wZXCKV7lOz0bsg3Enax7PGy1KSR.jpg",
      },
      {
        id:2,
        name:"バナナ",
        price:300,
        image:"https://as2.ftcdn.net/v2/jpg/00/43/87/85/1000_F_43878552_2HhkJECBgPB5fExEmtw9pbOefwTUgpdY.jpg",
      },
      {
        id:3,
        name:"みかん",
        price:"150",
        image:"https://t3.ftcdn.net/jpg/03/13/24/92/240_F_313249290_OqHUQe0lodqs1rMmutrug0B9yw8qtiP7.jpg",
      },
      {
        id:4,
        name:"メロン",
        price:"2000",
        image:"https://t4.ftcdn.net/jpg/04/42/58/25/240_F_442582591_ko40qYk9O9GLTWYBTZzuwraOecJqKXPS.jpghttps://t3.ftcdn.net/jpg/01/15/97/78/240_F_115977823_eva7WbykJwBdvyAUcKFi5Q58zssPd5c7.jpg",
      },
    ]);
  });

app.listen(port, () => {
  console.log(`port ${port} でサーバー起動中`);
});