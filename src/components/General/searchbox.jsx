import React from "react";
import "../../styles/tailwind.css";

function Searchbox() {
    return (
        <div class="flex justify-start bg-gray-200">
            <form class="w-full max-w-sm ml-4 mb-4">
                <div class="flex items-center border-b border-b-2 border-teal-500 py-2 m-4">
                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Search Movie (ex: Avengers: Endgame)" aria-label="Full name" />
                </div>
            </form>
        </div>
    )
}

export default Searchbox