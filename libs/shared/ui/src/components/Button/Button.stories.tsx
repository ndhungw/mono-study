import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: "Button",
  argTypes: {
    onClick: {
      action: "onClick executed!",
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}></Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "hello",
};
