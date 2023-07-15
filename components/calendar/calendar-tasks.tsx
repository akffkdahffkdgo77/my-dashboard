import { Task } from '@layouts/aside/calendar';

type CalendarTasksPropsType = {
    taskList: Task[];
};

export default function CalendarTasks({ taskList }: CalendarTasksPropsType) {
    return (
        <>
            <h3 className="mx-auto mt-20 w-full max-w-[336px] font-mono text-sm font-bold">Tasks / Appointments</h3>
            <ul className="mt-2.55 mx-auto mb-5 max-h-[240px] w-full max-w-[336px] space-y-2.5 overflow-y-auto py-2.5 pr-2.5">
                {taskList.map((task) => (
                    <li key={task.idx} className="w-full rounded-md bg-black p-2.5 text-white">
                        <small className="text-[10px] font-light">{task.title}</small>
                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
