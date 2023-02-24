import { InternalRouting } from "../utilities/routes/InternalRouting";
import { Header } from "./Header";
import { Welcome } from "./Welcome";

export const MainBoard = () => {
  return (
    <div>
            <Header/>
            <InternalRouting/>
        </div>
  );
};
