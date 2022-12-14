function Logout({ onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
    return (
        <button onClick={handleLogout}>Logout</button>
    );
  }