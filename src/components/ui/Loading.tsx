import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="m-auto flex justify-center items-center">
      <Loader2 className="h-10 w-10 animate-spin text-blue-400" />
    </div>
  );
};

export default Loading;
