import { FC } from "react";
import PropTypes from "prop-types";
// import { useAppDispatch } from "../../../store/index";

type Props = {
    isLoading?: boolean;
};

const Auth: FC<Props> = (props) => {
    const { isLoading } = props;
    // const dispatch = useAppDispatch();

    return (
        <div>
            {isLoading && <div>Cargando </div>}
            Auth
        </div>
    );
};

Auth.propTypes = {
    isLoading: PropTypes.bool,
};

export default Auth;
