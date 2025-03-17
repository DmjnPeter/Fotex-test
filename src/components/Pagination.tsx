import { Pagination } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";

const PaginationComponent = ({ totalPages }: { totalPages: number }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentPage = Number(searchParams?.get("page")) || 1;

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        const newParams = new URLSearchParams(searchParams?.toString());
        newParams.set("page", String(value));
        router.push(`/?${newParams.toString()}`);
    };

    return (
        <Pagination 
            count={totalPages} 
            page={currentPage} 
            onChange={handleChange} 
            color="primary"
        />
    );
};

export default PaginationComponent;
