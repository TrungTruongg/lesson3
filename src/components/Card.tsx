import {
  ClockIcon,
  EditIcon,
  FlagIcon,
  PaperclipIcon,
} from "../assets/icon/Icons";
import { flags, users } from "../constants";

const Card = (props: any) => {
  const usersAssigned = users.filter(
    (item) => item.userId === props.assignedTo
  );

  const flagsColorByTasks = flags.filter(
    (item) => item.flagId === props.flagId
  );

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-sm">{props.title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <EditIcon />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        {props.description}
      </p>

      {usersAssigned.map((user: any) => (
        <div className="mb-3" key={user.userId}>
          <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded ">
            {user.name}
          </span>
        </div>
      ))}

      <div className="flex gap-3 items-center justify-around border-t border-[#e6ecf0] w-full pt-2.5">
        <div className="flex items-center gap-2 font-bold">
          <PaperclipIcon />
          {props.totalAttachments}
        </div>
        {flagsColorByTasks.map((flagColor: any) => (
          <FlagIcon color={flagColor.color}/>
        ))}

        <div className="flex items-center gap-2 font-bold">
          <ClockIcon />
          {formatDate(props?.deadline)}
        </div>
      </div>
    </div>
  );
};

export default Card;
