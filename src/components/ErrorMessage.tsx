type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex text-[18px] font-[500] justify-start text-red-500">
      {message}
    </div>
  );
}

export default ErrorMessage;
