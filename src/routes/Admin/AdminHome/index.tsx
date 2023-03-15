import "./styles.css";
import { useEffect, useState } from "react";
import { UserDTO } from "../../../models/user";
import * as userService from "../../../services/user-service";

function AdminHome() {
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe().then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <main>
      <section id="admin-home-section" className="dsc-container">
        {user ? (
          <h2 className="dsc-section-title dsc-mb20">
            Bem-vindo à área administrativa {user.name}
          </h2>
        ) : null}
      </section>
    </main>
  );
}

export default AdminHome;