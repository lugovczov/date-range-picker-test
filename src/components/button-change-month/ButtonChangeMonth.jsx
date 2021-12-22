import React from 'react';
import {Button} from "@mui/material";
import {DECREMENT, DOUBLE, INCREMENT} from "../../constants/date-operators";
import {ReactComponent as ArrowLeftIcon} from "../../images/icons/ic_angle-left.svg";
import {ReactComponent as ArrowLeftDoubleIcon} from "../../images/icons/ic_angle_double_left.svg";
import {ReactComponent as ArrowRightIcon} from "../../images/icons/ic_angle-right.svg";
import {ReactComponent as ArrowRightDoubleIcon} from "../../images/icons/ic_angle_double_right.svg";

export const ButtonChangeMonth = ({ type, double, handleClick, disabled }) => {
  const getIconFromType = (type, double) => {
    switch (true) {
      case (type === DECREMENT && !double):
        return <ArrowLeftIcon className="w-3 h-3"/>;
      case (type === DECREMENT && double === DOUBLE):
        return <ArrowLeftDoubleIcon className="w-3 h-3"/>;
      case (type === INCREMENT && double === DOUBLE):
        return <ArrowRightDoubleIcon className="w-3 h-3"/>;
      case (type === INCREMENT && !double):
        return <ArrowRightIcon className="w-3 h-3"/>;
      default:
        break;
    }
  };

  return (
    <Button onClick={() => handleClick(type, double)}
            className="flex h-8 w-8 p-0 min-w-0"
            variant="icon"
            disabled={disabled}
    >
      {getIconFromType(type, double)}
    </Button>
  );
};
