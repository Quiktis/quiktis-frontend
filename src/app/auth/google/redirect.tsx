import { useMutations } from "@/src/ApiServices/hooks/useMutations";
import Loading from "@/src/components/ui/Loading";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Redirect = () => {
  const searchParams = useSearchParams();
  const googleCallback = useMutations().googleCallback;
  const code = searchParams.get("code");
  const handleGoogleCallback = async () => {
    if (code) {
      await googleCallback({ code });
    }
  };
  useEffect(()=>{
    handleGoogleCallback()
  }, [code])
  return <Loading />;
};

export default Redirect;
