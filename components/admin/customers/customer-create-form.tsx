"use client";

import {
  createCustomer,
  CreateCustomerState,
} from "@/actions/admin/customers/create-customer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";

export default function CustomerCreateForm() {
  const initialState: CreateCustomerState = {};
  const [state, dispatch] = useFormState(createCustomer, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <div>
          <Label>Customer Id</Label>
          <Input name="customerId" />
          {state.errors?.customerId?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Name</Label>
          <Input name="name" />
          {state.errors?.name?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Email</Label>
          <Input name="email" />
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
        </div>
      </form>
    </div>
  );
}
