import { Customer } from "@/schema/customers";
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

export default function CustomerTable({ customerList }: { customerList: Customer[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Customer Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        { customerList.map((customer) => (
          <TableRow key={ customer.id }>
            <TableCell>{ customer.id }</TableCell>
            <TableCell>{ customer.customerId?.toString() }</TableCell>
            <TableCell>{ customer.name?.toString() }</TableCell>
            <TableCell>{ customer.email?.toString() }</TableCell>
            <TableCell className="justify-end flex gap-2">
              <Link href={`/admin/customers/${ customer.id }`}>
                <Button size="icon" variant="outline">
                  <EyeOpenIcon />
                </Button>
              </Link>
              <Link href={`/admin/customers/${ customer.id }/edit`}>
                <Button size="icon" variant="outline">
                  <Pencil1Icon />
                </Button>
              </Link>
              <Link href={`/admin/customers/${ customer.id }/delete`}>
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
