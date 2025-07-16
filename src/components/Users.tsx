import { User } from "lucide-react";
import Link from "next/link";

function Users() {
  return (
    <div>
      <Link href="/login">
        <User size={35} strokeWidth={2} />
      </Link>
    </div>
  );
}

export default Users;
