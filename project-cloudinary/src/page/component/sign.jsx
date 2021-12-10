import * as React from "react";
import { useDispatch } from "react-redux";
import { Action1, Action2 } from "../../store/action/signAction";
import swal from "sweetalert";
import style from "./sign.module.scss";
const SignIn = () => {
  const dispatch = useDispatch();
  const CallAPI1 = () => {
    dispatch(Action1()).then((res) => {
      console.log(res);
      if (res === 200) {
        swal({
          title: "Đăng nhập thành công!",
          text: "Chào mừng bạn!",
          icon: "success",
          button: false,
          timer: 2000,
        });
        return true;
      } else {
        swal({
          title: "Đăng nhập thất bại!",
          text: "Vui lòng kiểm tra lại!",
          icon: "error",
          buttons: "OK",
          dangerMode: true,
        });
        return false;
      }
    });
  };
  const CallAPI2 = () => {
    dispatch(Action2()).then((res) => {
      if (res === 200) {
        swal({
          title: "Đăng nhập thành công!",
          text: "Chào mừng bạn!",
          icon: "success",
          button: false,
          timer: 2000,
        });
        return true;
      } else {
        swal({
          title: "Đăng nhập thất bại!",
          text: "Vui lòng kiểm tra lại!",
          icon: "error",
          buttons: "OK",
          dangerMode: true,
        });
        return false;
      }
    });
  };
  return (
    <>
      <div onClick={CallAPI1} className={style.esc__button1}>
        <p  className={style.esc__p}>API1</p>
      </div>
      <div onClick={CallAPI2} className={style.esc__button2}>
      <p  className={style.esc__p}>API2</p>
      </div>

    </>
  );
};

export default SignIn;
