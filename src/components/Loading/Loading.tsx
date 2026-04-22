type LoadingProps = {
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-3",
};

const Loading = ({ fullScreen = false, size = "md" }: LoadingProps) => {
  const spinner = (
    <div
      className={`animate-spin rounded-full border-b-2 border-slate-800 ${sizeMap[size]}`}
    />
  );

  if (fullScreen) {
    return (
      <div className="h-screen flex items-center justify-center">{spinner}</div>
    );
  }

  return <div className="flex items-center justify-center">{spinner}</div>;
};

export default Loading;
