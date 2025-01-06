
import { useDispatch } from "react-redux";
import { UnsetUser } from "../redux/UsersAction";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    useEffect(() => {
        dispatch(UnsetUser());
        navigate("/", { replace: true });
    }, [dispatch, navigate]);
    return <></>;
  };

  export default LogoutPage;