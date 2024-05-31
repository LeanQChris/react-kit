import httpClient from "@/core/network/client";

export const fetchTodoById = async (id: string | number) => { // Call the async function
    try {
        const response = await httpClient.get("/todos/" + id);
        console.info(response, "from home page api");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const fetchEventDataBySlug = async (slug: string) => {
    try {
        const response = await httpClient.get("public/events/registration-page/" + slug);
        console.info(response, "from home page api");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}