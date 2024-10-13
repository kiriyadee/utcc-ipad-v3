import OverviewStatus from "@/components/private/components/overview-status";
import StudentForm from "@/components/private/components/student-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function PrivateDashboardPage() {
  return (
    <div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Download</Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <TabsContent value="overview" className="space-y-4">
              <StudentForm />
            </TabsContent>

            <TabsContent value="overview" className="">
              <OverviewStatus />

              {/* <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent></CardContent>
              </Card> */}
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* <section>
        <Card className="col-span-3">
          <PaymentStatus />
        </Card>
      </section> */}
    </div>
  );
}
