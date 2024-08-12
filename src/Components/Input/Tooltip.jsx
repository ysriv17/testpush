import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { GrCircleInformation } from "react-icons/gr"
const TooltipContent = ({ message }) => {
    return (

        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger >

                    <GrCircleInformation width={"50px"} height={"50px"} color='black' style={{ maxWidth: "500px" }} />

                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-primary-gray px-[15px] py-[10px] text-[10px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                        sideOffset={5}
                        style={{ maxWidth: "300px" }}
                    >
                        {message}
                        <Tooltip.Arrow className="fill-black" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );

};

export default TooltipContent;