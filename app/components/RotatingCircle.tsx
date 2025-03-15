import Circle from "../../public/svg/circle.svg"
import {FC, HTMLProps, SVGAttributes, SVGProps} from "react";
import cn from "classnames";

// const RotatingCircle: FC<HTMLProps<HTMLDivElement>> = ({...props}) => {
//     return (
//         <div
//             {...props}
//             className={cn(
//                 "rotating-circle relative size-[96px]",
//                 props.className
//             )}>
//             <Circle className="absolute h-[calc(10px+32px+100%)] w-[calc(10px+32px+100%)] -translate-x-[10px] -translate-y-[11px]" />
//         </div>
//     );
// };

const RotatingCircle: FC<SVGProps<SVGElement>> = ({...props}) => {
    return (
        <Circle {...props} className={cn(
            "pointer-events-none",
            props.className
        )} />
    );
};

export default RotatingCircle;
