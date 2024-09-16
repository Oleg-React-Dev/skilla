import { CallResult, CallStatus, InOut } from "@/types/calls";
import { TypeOfCall } from "@/types/type-of-call";

const callStatus = {
  [InOut.In]: {
    [CallStatus.Success]: TypeOfCall.InSuccess,
    [CallStatus.Fail]: TypeOfCall.InFail,
  },

  [InOut.Out]: {
    [CallStatus.Success]: TypeOfCall.OutSuccess,
    [CallStatus.Fail]: TypeOfCall.OutFail,
  },
} as const;

export const getCallStatus = (call: CallResult): TypeOfCall | undefined => {
  if (typeof call.in_out === "number") {
    return callStatus[call.in_out][call.status];
  }
};
