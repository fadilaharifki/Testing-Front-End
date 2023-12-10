interface PropsDataNotFound {
  name: string;
}

const NotFound: React.FC<PropsDataNotFound> = ({ name }) => {
  return (
    <div className="flex justify-center flex-col items-center text-4xl font-semibold uppercase text-gray-600">
      <div>{name}</div>
      <div>Data not available</div>
    </div>
  );
};
export default NotFound;
