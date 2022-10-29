import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "POST": {
      const { slug } = req.query;
      console.log("Esto es un post");
      console.log("slug es", slug);

      res.status(200).json({ status: 200 });
    }

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Metodo ${method} no aceptado`);
  }
}
