"use client";

import {
  updateStudent,
  UpdateStudentState,
} from "@/actions/private/students/update-student";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { Student } from "@/schema/students";

export default function StudentUpdateForm({ student }: { student: Student }) {
  const initialState: UpdateStudentState = {};
  const [state, dispatch] = useFormState(updateStudent, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={student.id} />
        <div>
          <p>
            <strong>Id:</strong> {student.id?.split("-")[0]}
          </p>
        </div>
        <div>
          <Label>Student Id</Label>
          <Input name="studentId" defaultValue={student.studentId ?? ""} />
          {state.errors?.studentId?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Frist Name</Label>
          <Input name="fristName" defaultValue={student.fristName ?? ""} />
          {state.errors?.fristName?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Last Name</Label>
          <Input name="lastName" defaultValue={student.lastName ?? ""} />
          {state.errors?.lastName?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Email</Label>
          <Input name="email" defaultValue={student.email ?? ""} />
          {state.errors?.email?.map((error) => (
            <p className="text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
        <div>
          <Label>Phone</Label>
          <Input name="phone" defaultValue={student.phone ?? ""} />
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
          {state.message === "success" && (
            <p className="text-green-500">success</p>
          )}
        </div>
      </form>
    </div>
  );
}
