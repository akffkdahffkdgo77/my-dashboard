import { CheckCircleIcon, EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';

export default function WeeklyCloneCoding() {
    return (
        <div className="mt-5 w-full rounded-md bg-black pt-5 font-mono">
            <h4 className="mx-5 flex items-center justify-between text-[14px] font-bold text-white">
                Weekly Clone Coding
                <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/akffkdahffkdgo77/weekly-clone-coding"
                    className="rounded-md bg-white px-2.5 py-[5px] text-[12px] font-bold text-[#293462] hover:scale-95"
                >
                    확인하기
                </a>
            </h4>
            <ul className="w-full p-5">
                <li className="flex items-center">
                    <EllipsisHorizontalCircleIcon className="mr-5 h-[20px] w-[20px] animate-pulse text-white" />
                    <span className="text-[14px] font-bold text-white">Today</span>
                    <div className="ml-5 flex-1 p-2.5 text-[12px] font-medium text-white">Clone Coding Dashboard </div>
                </li>
                <li className="flex items-center">
                    <CheckCircleIcon className="mr-5 h-[20px] w-[20px] text-white" />
                    <span className="text-[12px] font-bold text-white">2022.11 ~ 2022.12</span>
                    <div className="ml-5 flex-1 p-2.5 text-[12px] font-medium text-white">Clone Coding Rich Text Editor </div>
                </li>
                <li className="flex items-center">
                    <CheckCircleIcon className="mr-5 h-[20px] w-[20px] text-white" />
                    <span className="text-[12px] font-bold text-white">2022.11</span>
                    <hr />
                    <div className="ml-5 flex-1 p-2.5 text-[12px] font-medium text-white">Clone Coding Ticket Reservation</div>
                </li>
                <li className="flex items-center">
                    <CheckCircleIcon className="mr-5 h-[20px] w-[20px] text-white" />
                    <span className="text-[12px] font-bold text-white">2022.10 ~ 2022.11</span>
                    <hr />
                    <div className="ml-5 flex-1 p-2.5 text-[12px] font-medium text-white">Clone Coding MP3 Player</div>
                </li>
                <li className="flex items-center">
                    <CheckCircleIcon className="mr-5 h-[20px] w-[20px] text-white" />
                    <span className="text-[12px] font-bold text-white">2022.10</span>
                    <div className="ml-5 flex-1 p-2.5 text-[12px] font-medium text-white">Clone Coding 그림판</div>
                </li>
                <li className="flex items-center">
                    <CheckCircleIcon className="mr-5 h-[20px] w-[20px] text-white" />
                    <span className="text-[12px] font-bold text-white">2022.10</span>
                    <div className="ml-5 flex-1 p-2.5 text-[12px] font-medium text-white">Generating Custom Color Palette</div>
                </li>
                <li className="flex items-center">
                    <CheckCircleIcon className="mr-5 h-[20px] w-[20px] text-white" />
                    <span className="text-[12px] font-bold text-white">2022.10</span>
                    <div className="ml-5 flex-1 p-2.5 text-[12px] font-medium text-white">Clone Coding Form Builder</div>
                </li>
                <li className="flex items-center">
                    <CheckCircleIcon className="mr-5 h-[20px] w-[20px] text-white" />
                    <span className="text-[12px] font-bold text-white">2022.09</span>
                    <div className="ml-5 flex-1 p-2.5 text-[12px] font-medium text-white">나만의 일일 단어장</div>
                </li>
            </ul>
        </div>
    );
}
