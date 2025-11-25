import { useQuery } from "@tanstack/react-query";
import { dummyUserData } from "../dummy/dummyData";
import { UserType } from "../types/user.type";

const mockUserApi = {
    getUserList: async (): Promise<UserType[]> => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return dummyUserData;
    },
}



export const useUserQuery = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['userList'],
        queryFn: mockUserApi.getUserList,
        staleTime: 1000 * 60 * 10
    });
    return { data, isLoading, error };
}