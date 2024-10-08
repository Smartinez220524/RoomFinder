import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import MessageMainComponent from "@/components/Dashboard/Messages";

export default function Messages() {
    return (
        <div className="h-full max-w-screen-2xl mx-auto">
            <div className="mx-auto">
                <Breadcrumb pageName="Mensajes" />
                <div className="mx-auto overflow-hidden rounded-sm border border-stroke bg-white shadow-md dark:border-gray-950 dark:bg-gray-950">
                    <MessageMainComponent />
                </div>
            </div>
        </div>
    );
}
