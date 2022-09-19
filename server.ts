import { config } from "dotenv";
config();
import "reflect-metadata"
import server from './Configs/CustomExpress';
import DataBaseConnection from "./Configs/DataBaseConnection";

const PORT = process.env.PORT || 4333
server.listen(PORT, () => {
  console.log(`Server is running port ${process.env.PORT || 4008}`);
});
