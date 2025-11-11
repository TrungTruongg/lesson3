const Hello = (props: any) => {
  return (
    <div className="flex">
      {props.listName.map((list: any, index: any) => (
        <div
          key={index}
          className="w-xs border border-black p-5 rounded-[10px] font-sans m-1.5 text-[10px]"
        >
          <h1 className="text-[16px] font-bold">
            Bạn là người {list.age > 20 ? "Trưởng thành" : "Đang lớn"}
          </h1>
          <h2 className="text-[16px] text-red-500">Welcome to {props.school}</h2>
           <h3 className="text-[16px] text-red-500">Name: {list}</h3>
           <h3 className="text-[16px] text-blue-500">Age: {props.age}</h3>
        </div>
      ))}
    </div>
  );
};

export default Hello;
