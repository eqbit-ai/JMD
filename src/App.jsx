import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import useProfileCheck from "./useProfileCheck";

import PublicSite from "./PublicSite";
import AuthModal from "./AuthModal";
import CreateProfile from "./CreateProfile";
import BrowseProfiles from "./BrowseProfiles";
import ProfileHome from "./ProfileHome";


function App() {
  const { user, loading } = useContext(AuthContext);
  const hasProfile = useProfileCheck(user);
  const [authOpen, setAuthOpen] = useState(false);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!user) {
    return (
      <>
        <PublicSite onLoginClick={() => setAuthOpen(true)} />
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </>
    );
  }

  if (!hasProfile) {
    return <CreateProfile />;
  }

  return <ProfileHome />;
}

export default App;
