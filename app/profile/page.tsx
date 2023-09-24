import Profile from "@/components/profile/profile";
import getCurrentUser from "../actions/getCurrentUser";

const Page = async () => {
    const currentUser = await getCurrentUser();

    return (<Profile currentUser={currentUser} />);
}

export default Page;