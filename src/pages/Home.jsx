import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onClickGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // 로그인된 결과를 구글 인증을 통해서 확인 및 토큰 발급
        const token = credential.accessToken;
        const user = result.user;
        // 로그인된 결과 중에서 user를 통해 관련 정보르 가져올 수 있음
        navigate("/user", {
          state: {
            name: user.displayName,
            email: user.email,
            url: user.photoURL,
          },
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  //버튼 클릭 시 파이어스토어를 들고와서 사용
  return (
    <div>
      <h1>홈페이지</h1>
      <button onClick={onClickGoogleLogin}>구글로 로그인하기</button>
    </div>
  );
};

export default Home;
