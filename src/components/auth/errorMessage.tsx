type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex justify-start text-[0.875rem] text-[#D92222]">
      {message}
    </div>
  );
}

export default ErrorMessage;
