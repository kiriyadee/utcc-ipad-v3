"use client";

import {
  updateCustomer,
  UpdateCustomerState,
} from "@/actions/admin/customers/update-customer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { Customer } from "@/schema/customers";

export default function CustomerUpdateForm({
  customer,
}: {
  customer: Customer;
}) {
  const initialState: UpdateCustomerState = {};
  const [state, dispatch] = useFormState(updateCustomer, initialState);

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
          <Label>Customer Id</Label>
          <Input name="customerId" defaultValue={customer.customerId ?? ""} />
          {state.errors?.customerId?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Name</Label>
          <Input name="name" defaultValue={customer.name ?? ""} />
          {state.errors?.name?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Email</Label>
          <Input name="email" defaultValue={customer.email ?? ""} />
          {state.errors?.email?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
        <div>
          {state.message === "error" && <p className="text-red-500">error</p>}
          {state.message === "success" && (
            <p className="text-green-500">success</p>
          )}
        </div>
      </form>
    </div>
  );
}
