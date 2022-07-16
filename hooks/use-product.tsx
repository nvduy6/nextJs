import useSWR, { useSWRConfig } from "swr";
import { add, getAll } from "../api/product"
const userProducts = () => {
    // const {mutate} = useSWRConfig();
    const fetcher = async (url: string) => {
        const { data } = await getAll(url);
        return data
    };
    const { data, error, mutate } = useSWR("/products", fetcher, {
        dedupingInterval: 5000,
    })
    const create = async (item) => {
        const { data: product } = await add(item);
        return [...data, product];
    };
    return {
        create,
        data,
        error,
        mutate
    }
}
export default userProducts