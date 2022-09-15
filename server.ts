import server from './Configs/CustomExpress';
import "reflect-metadata"
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 4008
server.listen(PORT, () => {
  console.log(`Server is running port ${process.env.PORT || 4008}`);
});
