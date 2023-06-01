interface Props {
  text: String;
  onclick?: () => void;
  height?: String | number;
  color?: String;
  props?: any;
}

const Button = ({ text, onclick, height, color, props }: Props) => {
  return (
    <div
      onClick={onclick}
      className="bg-green mt-6 flex items-center justify-center rounded-lg h-[45px]"
      {...props}
    >
      <div className="text-white">{text}</div>
    </div>
  );
};

export default Button;
