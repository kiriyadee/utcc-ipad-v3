"use client";

import {
  createStudent,
  CreateStudentState,
} from "@/actions/private/students/create-student";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";

export default function StudentCreateForm({}: {}) {
  const initialState: CreateStudentState = {};
  const [state, dispatch] = useFormState(createStudent, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <div>
          <Label>Student Id</Label>
          <Input name="studentId" />
          {state.errors?.studentId?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Frist Name</Label>
          <Input name="fristName" />
          {state.errors?.fristName?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Last Name</Label>
          <Input name="lastName" />
          {state.errors?.lastName?.map((error) => (
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
          <Label>Phone</Label>
          <Input name="phone" />
          {state.errors?.phone?.map((error) => (
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
