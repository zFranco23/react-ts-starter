
import { useAppSelector } from "../../../store/index";
import Auth from "../components/Auth";

const AuthContainer = () => {
  const auth = useAppSelector((state) => state.auth);

  const mappedProps = {
    isLoading: auth.isLoading,
  };

  const mappedActions = {
  };

  return <Auth {...mappedProps} {...mappedActions} />;
};

export default AuthContainer;
