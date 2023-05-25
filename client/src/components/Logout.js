function Logout({ onLogout }) {
  // Handles logout button press
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
    return (
        <button onClick={handleLogout}>Logout</button>
    );
  }