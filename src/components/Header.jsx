import { Navbar } from "./Navbar";
import { UserProfile } from "./UserProfile";

export const Header = ({ user, logout }) => {
  return (
    <div className="app-title">
      {user && <Navbar user={user} onLogout={logout} />}
      {user && <UserProfile user={user} />}
    </div>
  );
};
