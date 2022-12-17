import { faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WeeklyCloneCoding() {
    return (
        <div className="w-full bg-black font-mono rounded-md pt-5 mt-5">
            <h4 className="text-[14px] font-bold text-white mx-5 flex justify-between items-center">
                Weekly Clone Coding
                <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/namiein/weekly-clone-coding"
                    className="rounded-md px-2.5 py-[5px] text-[12px] font-bold text-[#293462] bg-white hover:scale-95"
                >
                    확인하기
                </a>
            </h4>
            <ul className="w-full p-5">
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faSpinner} className="text-white mr-5 animate-pulse w-[20px] h-[20px]" />
                    <span className="font-bold text-white text-[14px]">Today</span>
                    <div className="text-[12px] font-medium ml-5 flex-1 p-2.5 text-white">Clone Coding Dashboard </div>
                </li>
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-5 w-[20px] h-[20px]" />
                    <span className="font-bold text-white text-[12px]">2022.11 ~ 2022.12</span>
                    <div className="text-[12px] font-medium ml-5 flex-1 p-2.5 text-white">Clone Coding Rich Text Editor </div>
                </li>
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-5 w-[20px] h-[20px]" />
                    <span className="font-bold text-white text-[12px]">2022.11</span>
                    <hr />
                    <div className="text-[12px] font-medium ml-5 flex-1 p-2.5 text-white">Clone Coding Ticket Reservation</div>
                </li>
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-5 w-[20px] h-[20px]" />
                    <span className="font-bold text-white text-[12px]">2022.10 ~ 2022.11</span>
                    <hr />
                    <div className="text-[12px] font-medium ml-5 flex-1 p-2.5 text-white">Clone Coding MP3 Player</div>
                </li>
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-5 w-[20px] h-[20px]" />
                    <span className="font-bold text-white text-[12px]">2022.10</span>
                    <div className="text-[12px] font-medium ml-5 flex-1 p-2.5 text-white">Clone Coding 그림판</div>
                </li>
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-5 w-[20px] h-[20px]" />
                    <span className="font-bold text-white text-[12px]">2022.10</span>
                    <div className="text-[12px] font-medium ml-5 flex-1 p-2.5 text-white">Generating Custom Color Palette</div>
                </li>
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-5 w-[20px] h-[20px]" />
                    <span className="font-bold text-white text-[12px]">2022.10</span>
                    <div className="text-[12px] font-medium ml-5 flex-1 p-2.5 text-white">Clone Coding Form Builder</div>
                </li>
                <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-5 w-[20px] h-[20px]" />
                    <span className="font-bold text-white text-[12px]">2022.09</span>
                    <div className="text-[12px] font-medium ml-5 flex-1 p-2.5 text-white">나만의 일일 단어장</div>
                </li>
            </ul>
        </div>
    );
}
