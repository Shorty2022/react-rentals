import * as SwitchPrimitive from "@radix-ui/react-switch";
import cx from "classnames";
import React from "react";
import { PromiseData } from "use-promised";
import HttpError from "../../utils/http-error";

interface SwitchProps {
  label: string,
  setSwitchState: React.Dispatch<React.SetStateAction<boolean>>,
  submitPromise: PromiseData<void, HttpError>,
}

const Switch = ({ setSwitchState, submitPromise, label }: SwitchProps) => {
  return ( 
    <SwitchPrimitive.Root onCheckedChange={(checked) => setSwitchState(checked)} disabled={submitPromise.pending} aria-label={label}
      className={cx(
        "group",
        "data-[state=checked]:bg-cyan-600",
        "data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-800",
        "relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
      )}>

      <SwitchPrimitive.Thumb
        className={cx(
          "data-[state=checked]:translate-x-5",
          "data-[state=unchecked]:translate-x-0",
          "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        )} />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
