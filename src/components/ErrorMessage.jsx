import { AlertCircle } from "lucide-react";

export default function ErrorMessage({ message }) {
  return (
    <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-lg">
      <AlertCircle className="mr-2" /> {message}
    </div>
  );
}
