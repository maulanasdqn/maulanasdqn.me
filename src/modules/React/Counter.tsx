import Button from "@components/React/Common/Button";
import type { FC, ReactElement } from "react";
import { countState } from "@store/Content";
import { useStore } from "@nanostores/react";

const Counter: FC = (): ReactElement => {
  const $count = useStore(countState);
  return (
    <Button
      className="bg-white p-2 w-auto h-auto rounded-lg text-blue-400 font-sans font-700 border-2 border-blue-400"
      onClick={() => countState.set($count + 1)}
      type={"button"}
      text={"Like " + $count}
    />
  );
};

export default Counter;
