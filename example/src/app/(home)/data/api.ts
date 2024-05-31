import httpClient from "@/core/network/client";

export const fetchTodoById = async (id: string | number) => { // Call the async function
    try {
        const { data } = await httpClient.get("/todos/" + id);
        console.info(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};