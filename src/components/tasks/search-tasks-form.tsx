import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router";

export function SearchTasksForm() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  return (
    <form method="get" action="/" className="mb-4 flex justify-end">
      <Input
        className="w-80"
        type="search"
        id="keyword"
        name="keyword"
        placeholder="Search"
        defaultValue={keyword}
      />
    </form>
  );
}
