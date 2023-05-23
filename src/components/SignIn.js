
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin, googleLogout} from "@react-oauth/google";
import { useState, useEffect } from 'react';
import axios from "axios";
const SignIn = () => {
    const [user, setUser ] = useState([])
    const [profile, setProfile] = useState([])
   
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  // đoạn code này ám chỉ
  useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    
    
    // [user] trong react useEffect tức là sau khi user được thay đổi thì sẽ trigger đoạn code trong useEffect
    // [] trong react useEffect tức là đoạn code trong useEffect trước trigger khi cái component được render
    [ user ]
);


const logOut = () => {
  googleLogout();
  setProfile(null);
};

return (
  <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
          <div>
              <img src={profile.picture} alt="user image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
          </div>
      ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
  </div>
);
  }
  
  export default SignIn