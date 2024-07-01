import { Button } from "@/components/ui/button";
import { useState } from "react";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="text-center">
        <h1 className="text-3xl">Welcome to Your Bare-Bones App</h1>
        <p className="text-lg">This is a minimal web application template.</p>
      </div>
      <div className="text-center">
        <p className="text-xl">Counter: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </main>
  );
}

export default Index;