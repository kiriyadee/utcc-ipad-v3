"use client";

import {
  deleteCustomer,
  DeleteCustomerState,
} from "@/actions/admin/customers/delete-customer";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { Customer } from "@/schema/customers";

export default function CustomerDeleteForm({
  customer,
}: {
  customer: Customer;
}) {
  const initialState: DeleteCustomerState = {};
  const [state, dispatch] = useFormState(deleteCustomer, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={customer.id} />
        <div>
          <p>
            <strong>Id:</strong> {customer.id}
          </p>
        </div>
        <div>
          <Button type="submit" variant="destructive">
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
}
