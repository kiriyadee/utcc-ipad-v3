import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Microscope } from "lucide-react";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <h1 className="text-3xl font-bold">Academics</h1>
      </div>

      <div className="container mx-auto py-8 px-4 md:px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    {program.icon}
                    <span className="ml-2">{program.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {program.description}
                  </p>
                  <Link href={program.link} passHref>
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Academic Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Library Services</li>
            <li>Academic Advising</li>
            <li>Career Center</li>
            <li>Study Abroad Office</li>
          </ul>
          <Button className="mt-4">Explore Resources</Button>
        </section>
      </div>
    </div>
  );
}

const programs = [
  {
    name: "Arts & Sciences",
    icon: <BookOpen className="h-5 w-5" />,
    description:
      "Explore a diverse range of subjects in humanities and sciences.",
    link: "/programs/arts-sciences",
  },
  {
    name: "Engineering",
    icon: <GraduationCap className="h-5 w-5" />,
    description:
      "Develop innovative solutions to complex technical challenges.",
    link: "/programs/engineering",
  },
  {
    name: "Business",
    icon: <Users className="h-5 w-5" />,
    description: "Learn to lead and innovate in the global business landscape.",
    link: "/programs/business",
  },
  {
    name: "Research",
    icon: <Microscope className="h-5 w-5" />,
    description: "Contribute to groundbreaking discoveries across disciplines.",
    link: "/programs/research",
  },
];
