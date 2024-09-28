import { Post } from "@/schema/posts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PostTable({ postList }: { postList: Post[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Content</TableHead>
          <TableHead>Is Draft</TableHead>
          <TableHead>Published At</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        { postList.map((post) => (
          <TableRow key={ post.id }>
            <TableCell>{ post.id }</TableCell>
            <TableCell>{ post.title?.toString() }</TableCell>
            <TableCell>{ post.content?.toString() }</TableCell>
            <TableCell>{ post.isDraft?.toString() }</TableCell>
            <TableCell>{ post.publishedAt?.toString() }</TableCell>
            <TableCell className="justify-end flex gap-2">
              <Link href={`/admin/posts/${ post.id }`}>
                <Button size="icon" variant="outline">
                  <EyeOpenIcon />
                </Button>
              </Link>
              <Link href={`/admin/posts/${ post.id }/edit`}>
                <Button size="icon" variant="outline">
                  <Pencil1Icon />
                </Button>
              </Link>
              <Link href={`/admin/posts/${ post.id }/delete`}>
                <Button size="icon" variant="outline">
                  <TrashIcon />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
