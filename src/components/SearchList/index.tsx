const SearchList = (props: {
  data: {
    name: string;
  };
}) => {
  return <div>{props.data.name}</div>;
};

export default SearchList;
