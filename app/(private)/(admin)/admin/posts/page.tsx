import { db } from "@/lib/db";
import { count } from "drizzle-orm";
import { posts } from "@/schema/posts";
import Pagination from "@/components/pagination";
import PostTable from "@/components/admin/posts/post-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string; pageSize: string };
}) {
  const page = parseInt(searchParams.page) || 1;
  const pageIndex = page - 1;
  const pageSize = parseInt(searchParams.pageSize) || 10;
  const countRecords = await db.select({ value: count() }).from(posts);
  const countRecord = countRecords[0];
  const totalPages = Math.ceil(countRecord.value / pageSize);
  const postList = await db.query.posts.findMany({
    limit: pageSize,
    offset: pageIndex * pageSize,
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="text-right mr-2">
        <Link href="/admin/posts/new">
          <Button>
            <PlusIcon className="mr-2" /> New
          </Button>
        </Link>
      </div>
      <div className="mb-5">
        <PostTable postList={ postList } />
      </div>
      <div>
        <Pagination page={page} pageSize={pageSize} totalPages={totalPages} />
      </div>
    </div>
  );
}
