import Button from "@components/React/Common/Button";
import type { FC, ReactElement } from "react";
import { nameState } from "store/Content";
import { useStore } from "@nanostores/react";

const Counter: FC = (): ReactElement => {
  const $name = useStore(nameState);
  return (
    <Button
      className="bg-white p-2 w-auto h-auto"
      onClick={() =>
        nameState.set(nameState.get().split("").reverse().join(""))
      }
      type={"button"}
      text={$name}
    />
  );
};

export default Counter;
