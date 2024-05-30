import React from "react";
import { Button, MultiSelect } from "@mantine/core";
function page() {
  return (
    <div className=" bg-black grid gap-3 p-24 h-screen">
      <MultiSelect
        label="Your favorite libraries"
        placeholder="Pick value"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <Button variant="filled" color="red">
        Button test
      </Button>
    </div>
  );
}

export default page;
