import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";

export default function ComponentsShowcase() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Components Showcase</h1>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar />
            <div>
              <div className="font-semibold">Profile Card</div>
              <div className="text-sm text-slate-500">Example using Avatar + Card</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is a card. Try the button and input below.</p>
          <div className="flex gap-2">
            <Input placeholder="Type something..." />
            <Button>Submit</Button>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="font-semibold mb-2">Tabs (Example)</h2>
        <Tabs defaultValue="first">
          <TabsList>
            <TabsTrigger value="first">First</TabsTrigger>
            <TabsTrigger value="second">Second</TabsTrigger>
          </TabsList>
          <TabsContent value="first">First tab content</TabsContent>
          <TabsContent value="second">Second tab content</TabsContent>
        </Tabs>
      </div>

      <div>
        <Button>Primary</Button>
        <Button variant="ghost" className="ml-2">Ghost</Button>
      </div>
    </div>
  );
}
