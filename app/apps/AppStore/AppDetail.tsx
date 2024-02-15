import React from "react"
import { GoQuestion } from "react-icons/go"
import { IoIosLaptop } from "react-icons/io"
import { IoMdTabletPortrait } from "react-icons/io"
import { IoIosNavigate } from "react-icons/io"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { TbNavigationEast } from "react-icons/tb"
import SeeMore from "app/components/ui/SeeMore"
import BadgeSlider from "./BadgeSlider"
import ScreenshotSlider from "./ScreenshotSlider"

const AppDetail = () => {
    return (
        <div className="h-full w-full  overflow-y-auto overflow-x-hidden p-5 pb-16 dark:bg-md-dark-surface">
            <div className="flex gap-6">
                <div className="flex flex-col items-center justify-center">
                    <img className="h-24 w-24" src="/static/images/icons/PNG/App-store.png" alt="App" />
                </div>
                <div>
                    {" "}
                    <h5 className="mb-0 text-xl font-extrabold text-gray-900 dark:text-white">Craft: Write docs, AI editing</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Some phrases, about the app</span>
                    <div className="mt-4 flex ">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-full bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Visit App
                        </a>
                        <a
                            href="#"
                            className="ms-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                            View Source
                        </a>
                    </div>
                </div>
            </div>
            <hr className="my-4 opacity-30" />
            <BadgeSlider />

            <div className="my-8 p-4">
                <ScreenshotSlider />
            </div>

            <div className="flex items-end gap-2">
                <div className="flex items-end">
                    <IoIosLaptop />
                    <IoMdTabletPortrait />
                    <IoPhonePortraitOutline />
                </div>
                <span className="font-semibold text-gray-400">Responsive UI using TailwindCSS</span>
            </div>

            <div className="flex w-full justify-between gap-4 py-4">
                <div className="text-left text-sm">
                    <SeeMore
                        words={26}
                        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero numquam quod a quae nemo sed dolorem doloribus quasi eligendi similique? Voluptatem vel ducimus, sit fuga corrupti ipsam officiis quis, dolorem consequatur quod, ipsum officia eaque nulla eligendi? Omnis eveniet quasi sint sed odit perspiciatis, eius minus error nihil officiis iusto pariatur labore qui dolorum libero? Laudantium quam dolore voluptas minus pariatur maiores! Alias consectetur reiciendis neque perspiciatis labore explicabo ducimus sed autem quod repellendus ipsum, id consequatur esse deserunt rem ad aut. Similique accusamus ullam impedit laudantium quis dolor nesciunt ratione culpa dolorem labore ex ipsum tempora beatae quaerat sapiente, saepe magni temporibus vel iure nisi, eum autem aperiam ut mollitia. Quod dicta rerum, vel ut veniam necessitatibus in itaque atque, ducimus voluptatibus laboriosam a impedit ipsum eligendi laborum porro ratione eius tempore accusamus explicabo, facilis expedita ad maiores! Dolor consequuntur quos quaerat tempore reprehenderit aperiam odit, placeat, exercitationem voluptate fuga possimus, expedita error voluptas illo ex tempora optio! Est excepturi tempore eos ipsa nemo molestiae, ut repellat iure ipsum minus. Nam deleniti officiis ea, perferendis veritatis soluta ratione doloremque tempore assumenda totam praesentium explicabo tenetur non iure exercitationem. Quam, fugit labore. Quas dolore ea ipsum. Cupiditate ea quod, provident veniam pariatur cum reprehenderit sint rem dignissimos nemo doloribus voluptas eaque possimus non nostrum, debitis odio, quia quam quisquam consequuntur. Impedit sapiente ipsam fugiat, mollitia omnis suscipit quidem quo quaerat quas veniam, doloremque nam! Tenetur provident architecto, excepturi maxime molestiae incidunt, alias vero earum eligendi recusandae expedita esse. Iste, corrupti!
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor magnam sapiente dolorum eum accusamus doloremque vero! Reiciendis corrupti rem quisquam dolore nesciunt? Repellat, in? Voluptatibus laborum dignissimos necessitatibus. Magni minus cum eos nobis commodi sunt voluptatum sed ex, quasi labore debitis. Mollitia quos asperiores laudantium blanditiis optio deleniti voluptate error dolorem? Culpa repudiandae sint ullam eveniet veritatis. Voluptate totam repellat dolore ut similique dolorem.
                    Dolor, error! Mollitia, similique consectetur."
                    ></SeeMore>
                </div>
                <div className="links ">
                    <h4 className="text-xl text-blue-600 shadow-lg">Resources</h4>
                    <div className="flex items-center justify-end text-gray-500">
                        <div>Website</div> <TbNavigationEast />
                    </div>
                    <div className="flex items-center justify-end text-gray-500">
                        <div>Support</div> <GoQuestion />
                    </div>
                </div>
            </div>
            <hr className="my-4 opacity-30" />
            <h4 className="text-3xl">Information</h4>
            <div className="my-4 grid grid-cols-2 gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => {
                    return (
                        <div key={idx} className="badge flex flex-col  items-start justify-start">
                            <h4 className="font-bold text-gray-500">SIze</h4>

                            <div className="badge-footer text-gray-200">29.8 MB</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AppDetail
