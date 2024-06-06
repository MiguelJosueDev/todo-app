export const Navbar = ({ user, onLogout }) => {
    return (
      <nav>
        <span>{user.name}</span>
        <button onClick={onLogout}>Logout</button>
      </nav>
    );
  };
  