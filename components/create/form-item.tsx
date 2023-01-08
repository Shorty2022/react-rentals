import { PromiseData } from "use-promised";
import HttpError from "../../utils/http-error";
import Text from "../../components/lowlevel/text";

type FormItemProps = {
  id: string;
  textName: string;
  submitPromise: PromiseData<void, HttpError>;
};

export default function FormItem({id, textName, submitPromise}: FormItemProps) {
  return (
    <div>
      <label htmlFor={id} className="block">
        <Text as="p" variant="p" color="default" weight="bold">
          {textName}
        </Text>
      </label>

      <input
        type="text"
        id={id}
        name={id}
        className="rounded-md border-2 border-slate-200 w-8/12 h-8"
        disabled={submitPromise.pending}
        required />
    </div>
  );
}
