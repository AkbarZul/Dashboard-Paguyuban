import toast, { ToastPosition } from "react-hot-toast";
import { CheckCircle, XCircle } from "lucide-react";

export const TOAST_TIMEOUT = 5000;

const baseStyle =
  "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-sm font-medium";

export const toastSuccess = (
  title: string,
  description?: string,
  position?: ToastPosition,
) => {
  toast.custom(
    (t) => (
      <div
        className={`${baseStyle} bg-emerald-50 text-emerald-700 border border-emerald-200 ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <CheckCircle className="w-5 h-5 text-emerald-600" />
        <div>
          <p className="font-semibold">{title}</p>
          {description && <p className="text-xs">{description}</p>}
        </div>
      </div>
    ),
    {
      duration: TOAST_TIMEOUT,
      position,
    },
  );
};

export const toastError = (
  title: string,
  description?: string,
  position?: ToastPosition,
) => {
  toast.custom(
    (t) => (
      <div
        className={`${baseStyle} bg-rose-50 text-rose-700 border border-rose-200 ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <XCircle className="w-5 h-5 text-rose-600" />
        <div>
          <p className="font-semibold">{title}</p>
          {description && <p className="text-xs">{description}</p>}
        </div>
      </div>
    ),
    {
      duration: TOAST_TIMEOUT,
      position,
    },
  );
};
