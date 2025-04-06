
import { Suspense } from "react";
import SuccessPage from "./SuccessPage";


export default function SuccessConfirm() {
  return (
    <Suspense fallback={<div>Loading success page...</div>}>
       <SuccessPage/>
    </Suspense>
  );
}
