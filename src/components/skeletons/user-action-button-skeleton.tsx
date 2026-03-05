const UserActionButtonSkeleton = () => {
  return (
    <button className="flex items-center justify-center gap-2 text-zinc-200 rounded-full capitalize w-full bg-amber-100/40 px-4 py-3 cursor-pointer group">
      <div className="size-6 border-t-4 border-orange-100 rounded-full animate-spin duration-1000- ease-in"></div>
    </button>
  );
};

export default UserActionButtonSkeleton;
