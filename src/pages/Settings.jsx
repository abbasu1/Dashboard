import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm mb-1">Display name</label>
          <Input placeholder="Your display name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input placeholder="email@example.com" />
        </div>
        <div>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
}
