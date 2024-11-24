"use client";

import {
  deleteStudent,
  DeleteStudentState,
} from "@/actions/private/students/delete-student";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { Student } from "@/schema/students";

export default function StudentDeleteForm({ student }: { student: Student }) {
  const initialState: DeleteStudentState = {};
  const [state, dispatch] = useFormState(deleteStudent, initialState);

  return (
    <div>
      <form action={dispatch} className="flex flex-col gap-2">
        <input type="hidden" name="id" value={student.id} />
        <div>
          <p>
            <strong>Id:</strong> {student.id}
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
