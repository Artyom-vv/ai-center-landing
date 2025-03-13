import React from "react";

export type HTMLButtonAriaProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onBlur' | 'onFocus' | 'onKeyUp' | 'onKeyDown' | 'disabled' >
