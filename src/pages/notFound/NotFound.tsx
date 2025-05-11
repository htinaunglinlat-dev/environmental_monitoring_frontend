interface Props {
  label?: string;
}

const NotFound: React.FC<Props> = ({ label }) => {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center flex-col gap-3">
      <div className="text-4xl font-semibold ">404 | Not found</div>
      {label && (
        <div className="font-semibold text-muted-foreground">
          <span className="text-xl font-bold">{label}</span> is not found.
        </div>
      )}
    </div>
  );
};

export default NotFound;
