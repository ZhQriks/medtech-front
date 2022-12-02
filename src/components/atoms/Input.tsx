import clsx from "clsx";

interface Placeholder extends React.ComponentPropsWithoutRef<"input"> {
  label?: null;
  placeholder: string;
}

interface Label extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  placeholder?: "";
}

interface Icon {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

interface InputProps {
  value?: string;
  name: string;
  type?: "email" | "password" | "text";
}

type Props = { className?: string; onChange?: (event?: any) => void } & (
  | Placeholder
  | Label
) &
  Icon &
  InputProps;

const Input = ({
  className = "",
  onChange,
  value = "",
  label = null,
  placeholder = " ",
  startIcon = null,
  endIcon = null,
  name,
  type = "text",
}: Props) => {
  return (
    <div
      className={clsx(
        className,
        "relative",
        (endIcon !== null || startIcon !== null || label !== null) &&
          "flex items-center"
      )}
    >
      {startIcon !== null && (
        <div className="absolute left-5 mr-3 ">{startIcon}</div>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(event) => {
          onChange && onChange(event);
        }}
        placeholder={placeholder}
        className={clsx(
          "ease peer w-full rounded-2xl border-8 border-black  bg-white  px-5 py-3",
          "text-sm text-black duration-300 placeholder:text-black/30 focus:border-primary",
          startIcon !== null && "pl-12"
        )}
      />
      {endIcon !== null && <div className="absolute right-5 ">{endIcon}</div>}
      {label !== null && (
        <label
          htmlFor={name}
          className="absolute top-1.5 z-10 origin-[0] -translate-y-4 translate-x-3
                     transform rounded-full bg-white/80 px-1.5 text-xs text-black/30
                     duration-300 
                     peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
                     peer-placeholder-shown:translate-x-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm 
                     peer-placeholder-shown:text-white/33 peer-focus:top-1.5 peer-focus:-translate-y-4 
                     peer-focus:translate-x-3
                     peer-focus:transform peer-focus:bg-white/80 peer-focus:px-1.5
                     peer-focus:text-xs peer-focus:text-primary "
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
