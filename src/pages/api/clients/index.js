import Client from "../../../models/client";
import dbConnection from "../../../services/dbConnection";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const clients = await Client.find({});
        res.status(200).json({ sucess: true, data: clients });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;

      case 'POST':
        try {
          const { namae, email } = req.body;
          if ((!namae, !email)) throw 'invalid data';
          const client = await Client.create({ namae, email });
          res.status(201).json({ sucess: true, data: client });
        } catch (error) {
          console.log(error);
          res.status(500).json({ sucess: false, error });
        }
        break;
  }
}