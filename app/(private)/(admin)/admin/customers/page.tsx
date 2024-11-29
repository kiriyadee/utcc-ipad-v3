import { db } from "@/lib/db";
import { count } from "drizzle-orm";
import { customers } from "@/schema/customers";
import Pagination from "@/components/pagination";
import CustomerTable from "@/components/admin/customers/customer-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Page(
  props: {
    searchParams: Promise<{ page: string; pageSize: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams.page) || 1;
  const pageIndex = page - 1;
  const pageSize = parseInt(searchParams.pageSize) || 10;
  const countRecords = await db.select({ value: count() }).from(customers);
  const countRecord = countRecords[0];
  const totalPages = Math.ceil(countRecord.value / pageSize);
  const customerList = await db.query.customers.findMany({
    limit: pageSize,
    offset: pageIndex * pageSize,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <div className="text-right mr-2">
        <Link href="/admin/customers/new">
          <Button>
            <PlusIcon className="mr-2" /> New
          </Button>
        </Link>
      </div>
      <div className="mb-5">
        <CustomerTable customerList={ customerList } />
      </div>
      <div>
        <Pagination page={page} pageSize={pageSize} totalPages={totalPages} />
      </div>
    </div>
  );
}
