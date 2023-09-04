import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const note = ({ information }: { information: string }) => {
    return (
        <div className="w-full h-auto px-6 py-2 rounded-xl bg-blue-500 flex gap-5 items-center">
            <div className="w-1/12 h-full p-3">
                <AiOutlineInfoCircle className="text-4xl text-white" />
            </div>
            <div className="w-11/12 text-lg font-light text-white p-4">
                {information}
            </div>
        </div>
    );
};

export default note;
