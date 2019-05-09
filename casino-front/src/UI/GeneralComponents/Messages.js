import {message} from 'antd';

export const SuccessMsg = (msg) => {
    message.success(msg);
};

export const WarningMsg = (msg) => {
    message.warning(msg);
};

export const ErrorMsg = (msg) => {
    message.error(msg);
};