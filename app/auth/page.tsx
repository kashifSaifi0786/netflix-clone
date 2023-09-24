import Auth from "@/components/auth/Auth";
import getCurrentUser from "../actions/getCurrentUser";
import { redirect } from "next/navigation";

const Page = async () => {
    const currentUser = await getCurrentUser();

    if (currentUser) {
        redirect('/')
    }

    return (<Auth />);
}

export default Page;