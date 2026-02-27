import { Ref } from "react";

const LoadingSpinner = ({ ref }: { ref?: Ref<HTMLElement | null> }) => {
  if (ref !== null) {
    return (
      <div className="size-10 border-t border-orange-500 rounded-full animate-spin duration-1000- ease-in"></div>
    );
  }
};

export default LoadingSpinner;
