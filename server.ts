import { config } from "dotenv";
config();
import "reflect-metadata"
import server from './src/Configs/CustomExpress';

const PORT = process.env.PORT || 4008
server.listen(PORT, () => {
  console.log(`Server is running port ${process.env.PORT || 4008}`);
});
